# 🔧 Script de Teste de Conexão VPS (Windows PowerShell)
# Execute: powershell -ExecutionPolicy Bypass -File scripts/test-vps-windows.ps1

Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "🧪 Teste de Conexão VPS para Deploy" -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

# Ler variáveis
$VPS_HOST = Read-Host "📌 VPS Host (IP ou domínio)"
$VPS_USER = Read-Host "👤 VPS User"
$SSH_KEY = Read-Host "🔑 Caminho da chave SSH [C:\Users\$env:USERNAME\.ssh\id_rsa]"
if ([string]::IsNullOrWhiteSpace($SSH_KEY)) {
    $SSH_KEY = "$env:USERPROFILE\.ssh\id_rsa"
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "🔍 Executando testes..." -ForegroundColor Cyan
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""

# Teste 1: Ping
Write-Host "1️⃣  Testando conectividade (ping)..." -ForegroundColor Yellow
try {
    $ping = Test-Connection -ComputerName $VPS_HOST -Count 3 -ErrorAction Stop
    Write-Host "   ✅ Host está acessível" -ForegroundColor Green
} catch {
    Write-Host "   ⚠️  Ping falhou (pode estar bloqueado, não é crítico)" -ForegroundColor DarkYellow
}
Write-Host ""

# Teste 2: Porta 22
Write-Host "2️⃣  Testando porta SSH (22)..." -ForegroundColor Yellow
try {
    $tcpClient = New-Object System.Net.Sockets.TcpClient
    $asyncResult = $tcpClient.BeginConnect($VPS_HOST, 22, $null, $null)
    $wait = $asyncResult.AsyncWaitHandle.WaitOne(5000, $false)
    
    if ($wait -and $tcpClient.Connected) {
        Write-Host "   ✅ Porta 22 está aberta" -ForegroundColor Green
        $tcpClient.Close()
    } else {
        Write-Host "   ❌ Porta 22 NÃO está acessível" -ForegroundColor Red
        Write-Host "   → Verifique firewall/security group" -ForegroundColor DarkYellow
        $tcpClient.Close()
        exit 1
    }
} catch {
    Write-Host "   ❌ Erro ao testar porta: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Teste 3: Chave SSH existe
Write-Host "3️⃣  Verificando chave SSH..." -ForegroundColor Yellow
if (Test-Path $SSH_KEY) {
    Write-Host "   ✅ Chave privada encontrada: $SSH_KEY" -ForegroundColor Green
    
    # Verificar formato
    $firstLine = Get-Content $SSH_KEY -First 1
    if ($firstLine -like "*BEGIN OPENSSH PRIVATE KEY*") {
        Write-Host "   ✅ Formato correto (OpenSSH)" -ForegroundColor Green
    } elseif ($firstLine -like "*BEGIN RSA PRIVATE KEY*") {
        Write-Host "   ⚠️  Formato antigo (PEM)" -ForegroundColor DarkYellow
    } else {
        Write-Host "   ❌ Formato desconhecido" -ForegroundColor Red
    }
} else {
    Write-Host "   ❌ Chave privada NÃO encontrada: $SSH_KEY" -ForegroundColor Red
    Write-Host "   → Execute: ssh-keygen -t rsa -b 4096" -ForegroundColor DarkYellow
    Write-Host ""
    Write-Host "   Quer criar uma chave agora? (S/N): " -ForegroundColor Yellow -NoNewline
    $resposta = Read-Host
    if ($resposta -eq "S" -or $resposta -eq "s") {
        Write-Host "   Criando chave SSH..." -ForegroundColor Cyan
        ssh-keygen -t rsa -b 4096 -f "$env:USERPROFILE\.ssh\id_rsa" -N '""'
        Write-Host "   ✅ Chave criada!" -ForegroundColor Green
        $SSH_KEY = "$env:USERPROFILE\.ssh\id_rsa"
    } else {
        exit 1
    }
}
Write-Host ""

# Teste 4: Conexão SSH
Write-Host "4️⃣  Testando autenticação SSH..." -ForegroundColor Yellow
Write-Host "   (Isso pode levar alguns segundos...)" -ForegroundColor DarkGray
try {
    $sshTest = ssh -i $SSH_KEY -o BatchMode=yes -o ConnectTimeout=10 -o StrictHostKeyChecking=no "$VPS_USER@$VPS_HOST" "echo 'SSH_TEST_OK'" 2>&1
    
    if ($sshTest -like "*SSH_TEST_OK*") {
        Write-Host "   ✅ Autenticação SSH bem-sucedida!" -ForegroundColor Green
    } else {
        Write-Host "   ❌ Autenticação SSH FALHOU" -ForegroundColor Red
        Write-Host ""
        Write-Host "   Possíveis causas:" -ForegroundColor Yellow
        Write-Host "   1. Chave pública não está no VPS" -ForegroundColor DarkYellow
        Write-Host "   2. Permissões incorretas no VPS" -ForegroundColor DarkYellow
        Write-Host "   3. Usuário incorreto" -ForegroundColor DarkYellow
        Write-Host ""
        Write-Host "   Output do SSH:" -ForegroundColor DarkGray
        Write-Host $sshTest -ForegroundColor DarkGray
        
        Write-Host ""
        Write-Host "   Quer copiar a chave pública para o VPS agora? (S/N): " -ForegroundColor Yellow -NoNewline
        $copiar = Read-Host
        if ($copiar -eq "S" -or $copiar -eq "s") {
            Write-Host ""
            Write-Host "   Execute este comando no VPS:" -ForegroundColor Cyan
            Write-Host "   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
            $publicKey = Get-Content "$SSH_KEY.pub"
            Write-Host "   mkdir -p ~/.ssh && echo '$publicKey' >> ~/.ssh/authorized_keys && chmod 700 ~/.ssh && chmod 600 ~/.ssh/authorized_keys" -ForegroundColor White
            Write-Host "   ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
        }
        exit 1
    }
} catch {
    Write-Host "   ❌ Erro: $($_.Exception.Message)" -ForegroundColor Red
    exit 1
}
Write-Host ""

# Teste 5: Diretórios
Write-Host "5️⃣  Verificando estrutura no VPS..." -ForegroundColor Yellow
$checkDirs = ssh -i $SSH_KEY -o BatchMode=yes -o StrictHostKeyChecking=no "$VPS_USER@$VPS_HOST" @"
if [ -d '/buildjerf' ]; then echo 'DIR_BUILDJERF_OK'; else echo 'DIR_BUILDJERF_MISSING'; fi
if [ -d '/buildjerf/build-jerf-server' ]; then echo 'DIR_SERVER_OK'; else echo 'DIR_SERVER_MISSING'; fi
if [ -d '/buildjerf/sub-apps' ]; then echo 'DIR_SUBAPPS_OK'; else echo 'DIR_SUBAPPS_MISSING'; fi
echo "USER=$(whoami)"
echo "HOME=$HOME"
"@ 2>&1

if ($checkDirs -like "*DIR_BUILDJERF_OK*") {
    Write-Host "   ✅ /buildjerf existe" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  /buildjerf NÃO existe (será criado no deploy)" -ForegroundColor DarkYellow
}

if ($checkDirs -like "*DIR_SERVER_OK*") {
    Write-Host "   ✅ /buildjerf/build-jerf-server existe" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  /buildjerf/build-jerf-server NÃO existe" -ForegroundColor DarkYellow
}

if ($checkDirs -like "*DIR_SUBAPPS_OK*") {
    Write-Host "   ✅ /buildjerf/sub-apps existe" -ForegroundColor Green
} else {
    Write-Host "   ⚠️  /buildjerf/sub-apps NÃO existe (será criado)" -ForegroundColor DarkYellow
}

Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host "✅ TODOS OS TESTES PASSARAM!" -ForegroundColor Green
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor Cyan
Write-Host ""
Write-Host "📋 Configure estes secrets no GitHub:" -ForegroundColor Yellow
Write-Host "   Settings → Secrets and variables → Actions" -ForegroundColor DarkGray
Write-Host ""
Write-Host "VPS_HOST = $VPS_HOST" -ForegroundColor White
Write-Host "VPS_USER = $VPS_USER" -ForegroundColor White
Write-Host "VPS_SSH_KEY = (conteúdo abaixo)" -ForegroundColor White
Write-Host ""
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Get-Content $SSH_KEY
Write-Host "━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━" -ForegroundColor DarkGray
Write-Host ""
Write-Host "🚀 Seu VPS está pronto para deploy!" -ForegroundColor Green
Write-Host ""
Write-Host "Próximo passo:" -ForegroundColor Yellow
Write-Host "1. Copie os valores acima" -ForegroundColor White
Write-Host "2. Configure os secrets no GitHub" -ForegroundColor White
Write-Host "3. Execute o workflow: 🧪 Test SSH Connection" -ForegroundColor White
