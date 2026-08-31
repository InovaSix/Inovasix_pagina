#!/bin/bash

# 🤖 Script de Configuração Automática SSH
# Este script será executado assim que receber os dados

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🤖 Configuração Automática de Deploy"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Variáveis (serão preenchidas)
VPS_HOST="${1:-}"
VPS_USER="${2:-}"
VPS_PASS="${3:-}"
VPS_PORT="${4:-22}"

if [ -z "$VPS_HOST" ] || [ -z "$VPS_USER" ] || [ -z "$VPS_PASS" ]; then
    echo "❌ Uso: $0 <host> <user> <password> [port]"
    exit 1
fi

echo "📋 Configurações:"
echo "   Host: $VPS_HOST"
echo "   User: $VPS_USER"
echo "   Port: $VPS_PORT"
echo ""

# 1. Gerar chave SSH
echo "1️⃣  Gerando nova chave SSH..."
SSH_KEY_PATH="$HOME/.ssh/buildjerf_deploy"
if [ ! -f "$SSH_KEY_PATH" ]; then
    ssh-keygen -t rsa -b 4096 -f "$SSH_KEY_PATH" -N "" -C "github-actions-buildjerf"
    echo "   ✅ Chave criada: $SSH_KEY_PATH"
else
    echo "   ✅ Chave já existe: $SSH_KEY_PATH"
fi
echo ""

# 2. Copiar chave para VPS
echo "2️⃣  Copiando chave pública para VPS..."
if command -v sshpass &> /dev/null; then
    sshpass -p "$VPS_PASS" ssh-copy-id -i "$SSH_KEY_PATH.pub" -p "$VPS_PORT" -o StrictHostKeyChecking=no "$VPS_USER@$VPS_HOST"
    echo "   ✅ Chave copiada com sucesso"
else
    echo "   ⚠️  sshpass não instalado, copiando manualmente..."
    PUBLIC_KEY=$(cat "$SSH_KEY_PATH.pub")
    sshpass -p "$VPS_PASS" ssh -p "$VPS_PORT" -o StrictHostKeyChecking=no "$VPS_USER@$VPS_HOST" \
        "mkdir -p ~/.ssh && echo '$PUBLIC_KEY' >> ~/.ssh/authorized_keys && chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys"
    echo "   ✅ Chave copiada manualmente"
fi
echo ""

# 3. Testar conexão sem senha
echo "3️⃣  Testando conexão SSH..."
if ssh -i "$SSH_KEY_PATH" -p "$VPS_PORT" -o BatchMode=yes -o ConnectTimeout=10 -o StrictHostKeyChecking=no \
    "$VPS_USER@$VPS_HOST" "echo 'SSH_OK'" | grep -q "SSH_OK"; then
    echo "   ✅ Conexão SSH funcionando sem senha!"
else
    echo "   ❌ Falha na conexão SSH"
    exit 1
fi
echo ""

# 4. Verificar/criar estrutura de diretórios
echo "4️⃣  Verificando estrutura de diretórios no VPS..."
ssh -i "$SSH_KEY_PATH" -p "$VPS_PORT" -o StrictHostKeyChecking=no "$VPS_USER@$VPS_HOST" << 'REMOTE_SCRIPT'
    set -e
    
    echo "   Criando estrutura de diretórios..."
    sudo mkdir -p /buildjerf/build-jerf-server
    sudo mkdir -p /buildjerf/sub-apps
    sudo chown -R $(whoami):$(whoami) /buildjerf
    
    echo "   ✅ Estrutura criada:"
    ls -la /buildjerf/
REMOTE_SCRIPT
echo ""

# 5. Configurar firewall (se necessário)
echo "5️⃣  Verificando firewall..."
ssh -i "$SSH_KEY_PATH" -p "$VPS_PORT" -o StrictHostKeyChecking=no "$VPS_USER@$VPS_HOST" << 'REMOTE_SCRIPT'
    if command -v ufw &> /dev/null; then
        echo "   Configurando UFW..."
        sudo ufw allow 22/tcp 2>/dev/null || true
        sudo ufw allow 80/tcp 2>/dev/null || true
        sudo ufw allow 443/tcp 2>/dev/null || true
        echo "   ✅ UFW configurado"
    elif command -v firewall-cmd &> /dev/null; then
        echo "   Configurando firewalld..."
        sudo firewall-cmd --permanent --add-service=ssh 2>/dev/null || true
        sudo firewall-cmd --permanent --add-service=http 2>/dev/null || true
        sudo firewall-cmd --permanent --add-service=https 2>/dev/null || true
        sudo firewall-cmd --reload 2>/dev/null || true
        echo "   ✅ firewalld configurado"
    else
        echo "   ℹ️  Nenhum firewall detectado"
    fi
REMOTE_SCRIPT
echo ""

# 6. Exibir informações para GitHub
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ CONFIGURAÇÃO COMPLETA!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Secrets para configurar no GitHub:"
echo ""
echo "VPS_HOST = $VPS_HOST"
echo "VPS_USER = $VPS_USER"
echo "VPS_SSH_KEY = (abaixo)"
echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
cat "$SSH_KEY_PATH"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "🚀 VPS está pronto para deploy!"
echo ""
echo "Próximos passos:"
echo "1. Configure os secrets acima no GitHub"
echo "2. Execute o workflow de teste"
echo "3. Execute o deploy"
echo ""
echo "⚠️  SEGURANÇA: Troque a senha SSH após configurar!"
