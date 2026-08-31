#!/bin/bash

# 🔧 Script de Teste de Conexão VPS
# Use este script para diagnosticar problemas de conexão SSH antes de rodar o deploy

set -e

echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🧪 Teste de Conexão VPS para Deploy"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Ler variáveis
read -p "📌 VPS Host (IP ou domínio): " VPS_HOST
read -p "👤 VPS User: " VPS_USER
read -p "🔑 Caminho da chave SSH [~/.ssh/id_rsa]: " SSH_KEY
SSH_KEY=${SSH_KEY:-~/.ssh/id_rsa}

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "🔍 Executando testes..."
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""

# Teste 1: Ping
echo "1️⃣  Testando conectividade (ping)..."
if ping -c 3 "$VPS_HOST" > /dev/null 2>&1; then
    echo "   ✅ Host está acessível"
else
    echo "   ⚠️  Ping falhou (pode estar bloqueado, não é crítico)"
fi
echo ""

# Teste 2: Porta 22
echo "2️⃣  Testando porta SSH (22)..."
if timeout 5 bash -c "cat < /dev/null > /dev/tcp/$VPS_HOST/22" 2>/dev/null; then
    echo "   ✅ Porta 22 está aberta"
else
    echo "   ❌ Porta 22 NÃO está acessível"
    echo "   → Verifique firewall/security group"
    exit 1
fi
echo ""

# Teste 3: Chave SSH existe
echo "3️⃣  Verificando chave SSH..."
if [ -f "$SSH_KEY" ]; then
    echo "   ✅ Chave privada encontrada: $SSH_KEY"
    
    # Verificar formato
    FIRST_LINE=$(head -1 "$SSH_KEY")
    if [[ "$FIRST_LINE" == *"BEGIN OPENSSH PRIVATE KEY"* ]]; then
        echo "   ✅ Formato correto (OpenSSH)"
    elif [[ "$FIRST_LINE" == *"BEGIN RSA PRIVATE KEY"* ]]; then
        echo "   ⚠️  Formato antigo (PEM) - pode funcionar, mas recomenda-se OpenSSH"
    else
        echo "   ❌ Formato desconhecido"
        exit 1
    fi
else
    echo "   ❌ Chave privada NÃO encontrada: $SSH_KEY"
    echo "   → Execute: ssh-keygen -t rsa -b 4096"
    exit 1
fi
echo ""

# Teste 4: Permissões da chave
echo "4️⃣  Verificando permissões da chave..."
PERMS=$(stat -c %a "$SSH_KEY" 2>/dev/null || stat -f %A "$SSH_KEY" 2>/dev/null)
if [ "$PERMS" = "600" ] || [ "$PERMS" = "400" ]; then
    echo "   ✅ Permissões corretas ($PERMS)"
else
    echo "   ⚠️  Permissões incorretas ($PERMS) - ajustando para 600..."
    chmod 600 "$SSH_KEY"
    echo "   ✅ Permissões corrigidas"
fi
echo ""

# Teste 5: Conexão SSH
echo "5️⃣  Testando autenticação SSH..."
if ssh -i "$SSH_KEY" -o BatchMode=yes -o ConnectTimeout=10 -o StrictHostKeyChecking=no \
    "$VPS_USER@$VPS_HOST" "echo 'SSH_TEST_OK'" 2>/dev/null | grep -q "SSH_TEST_OK"; then
    echo "   ✅ Autenticação SSH bem-sucedida!"
else
    echo "   ❌ Autenticação SSH FALHOU"
    echo ""
    echo "   Tentando conexão detalhada para diagnóstico..."
    echo "   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    ssh -i "$SSH_KEY" -vv -o ConnectTimeout=10 "$VPS_USER@$VPS_HOST" exit 2>&1 | tail -20
    echo "   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
    exit 1
fi
echo ""

# Teste 6: Diretórios do projeto
echo "6️⃣  Verificando estrutura do projeto no VPS..."
ssh -i "$SSH_KEY" -o BatchMode=yes -o StrictHostKeyChecking=no "$VPS_USER@$VPS_HOST" << 'REMOTE_SCRIPT'
    echo "   Checando diretórios..."
    
    if [ -d "/buildjerf" ]; then
        echo "   ✅ /buildjerf existe"
    else
        echo "   ⚠️  /buildjerf NÃO existe (será criado no deploy)"
    fi
    
    if [ -d "/buildjerf/build-jerf-server" ]; then
        echo "   ✅ /buildjerf/build-jerf-server existe"
    else
        echo "   ⚠️  /buildjerf/build-jerf-server NÃO existe"
    fi
    
    if [ -d "/buildjerf/sub-apps" ]; then
        echo "   ✅ /buildjerf/sub-apps existe"
    else
        echo "   ⚠️  /buildjerf/sub-apps NÃO existe (será criado no deploy)"
    fi
    
    echo ""
    echo "   Sistema:"
    echo "   - User: $(whoami)"
    echo "   - Home: $HOME"
    echo "   - OS: $(cat /etc/os-release 2>/dev/null | grep PRETTY_NAME | cut -d'"' -f2 || echo "Unknown")"
REMOTE_SCRIPT

echo ""
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo "✅ TODOS OS TESTES PASSARAM!"
echo "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━"
echo ""
echo "📋 Configuração dos Secrets no GitHub:"
echo ""
echo "VPS_HOST = $VPS_HOST"
echo "VPS_USER = $VPS_USER"
echo "VPS_SSH_KEY = (conteúdo de $SSH_KEY)"
echo ""
echo "Para copiar a chave privada:"
echo "cat $SSH_KEY"
echo ""
echo "🚀 Seu VPS está pronto para deploy via GitHub Actions!"
