#!/bin/bash

# 🔐 Script para Configurar Secrets no GitHub via API
# Uso: ./configure-github-secrets.sh <github-token> <vps-host> <vps-user> <ssh-key-path>

set -e

GITHUB_TOKEN="${1:-}"
REPO="jerfsonsilva/buildjerf-portfolio"
VPS_HOST="${2:-}"
VPS_USER="${3:-}"
SSH_KEY_PATH="${4:-$HOME/.ssh/buildjerf_deploy}"

if [ -z "$GITHUB_TOKEN" ] || [ -z "$VPS_HOST" ] || [ -z "$VPS_USER" ]; then
    echo "❌ Uso: $0 <github-token> <vps-host> <vps-user> [ssh-key-path]"
    exit 1
fi

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔐 Configurando Secrets no GitHub"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Função para criar/atualizar secret
create_secret() {
    local secret_name="$1"
    local secret_value="$2"
    
    echo "⏳ Configurando $secret_name..."
    
    # Get public key for encryption
    PUBLIC_KEY_RESPONSE=$(curl -s -H "Authorization: token $GITHUB_TOKEN" \
        "https://api.github.com/repos/$REPO/actions/secrets/public-key")
    
    PUBLIC_KEY=$(echo "$PUBLIC_KEY_RESPONSE" | jq -r '.key')
    KEY_ID=$(echo "$PUBLIC_KEY_RESPONSE" | jq -r '.key_id')
    
    # Encrypt secret (requires sodium or libsodium)
    # For simplicity, we'll use a Python one-liner
    ENCRYPTED_VALUE=$(python3 -c "
import base64
from nacl import encoding, public

def encrypt(public_key: str, secret_value: str) -> str:
    public_key = public.PublicKey(public_key.encode('utf-8'), encoding.Base64Encoder())
    sealed_box = public.SealedBox(public_key)
    encrypted = sealed_box.encrypt(secret_value.encode('utf-8'))
    return base64.b64encode(encrypted).decode('utf-8')

print(encrypt('$PUBLIC_KEY', '''$secret_value'''))
")
    
    # Create/update secret
    curl -s -X PUT \
        -H "Authorization: token $GITHUB_TOKEN" \
        -H "Accept: application/vnd.github.v3+json" \
        "https://api.github.com/repos/$REPO/actions/secrets/$secret_name" \
        -d "{\"encrypted_value\":\"$ENCRYPTED_VALUE\",\"key_id\":\"$KEY_ID\"}" \
        > /dev/null
    
    echo "   ✅ $secret_name configurado"
}

# Ler chave SSH
if [ ! -f "$SSH_KEY_PATH" ]; then
    echo "❌ Chave SSH não encontrada: $SSH_KEY_PATH"
    exit 1
fi

SSH_KEY_CONTENT=$(cat "$SSH_KEY_PATH")

# Configurar secrets
echo "1️⃣  VPS_HOST..."
create_secret "VPS_HOST" "$VPS_HOST"

echo "2️⃣  VPS_USER..."
create_secret "VPS_USER" "$VPS_USER"

echo "3️⃣  VPS_SSH_KEY..."
create_secret "VPS_SSH_KEY" "$SSH_KEY_CONTENT"

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ Todos os secrets configurados!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🚀 Próximos passos:"
echo "1. Execute o workflow de teste no GitHub"
echo "2. Se passar, execute o deploy"
