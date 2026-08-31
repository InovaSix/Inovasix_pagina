# 🚨 RESUMO EXECUTIVO - Erro de Deploy

## ❌ Problema
```
dial tcp ***:22: i/o timeout
```
GitHub Actions não consegue conectar ao VPS via SSH.

---

## ✅ SOLUÇÃO RÁPIDA (5 Passos)

### 1. Configure os Secrets no GitHub

Vá em: **Settings → Secrets and variables → Actions → New repository secret**

Adicione 3 secrets:

| Nome | Valor | Como Obter |
|------|-------|------------|
| `VPS_HOST` | IP ou domínio do VPS | `curl ifconfig.me` (no VPS) |
| `VPS_USER` | Usuário SSH (ex: root) | `whoami` (no VPS) |
| `VPS_SSH_KEY` | Chave privada SSH | `cat ~/.ssh/id_rsa` (no seu PC) |

**IMPORTANTE:** Para `VPS_SSH_KEY`, copie TODO o conteúdo, incluindo:
```
-----BEGIN OPENSSH PRIVATE KEY-----
...
-----END OPENSSH PRIVATE KEY-----
```

---

### 2. Configure a Chave Pública no VPS

```bash
# No seu computador LOCAL
cat ~/.ssh/id_rsa.pub

# Conecte ao VPS e adicione:
ssh seu_usuario@seu_vps
mkdir -p ~/.ssh
echo "COLE_A_CHAVE_PUBLICA_AQUI" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
exit

# Teste a conexão
ssh seu_usuario@seu_vps
# Deve conectar SEM pedir senha
```

---

### 3. Libere a Porta 22 no Firewall

**No VPS:**
```bash
# Ubuntu/Debian
sudo ufw allow 22/tcp
sudo ufw reload

# CentOS/RHEL
sudo firewall-cmd --permanent --add-port=22/tcp
sudo firewall-cmd --reload
```

**No Cloud Provider:**

- **AWS:** EC2 → Security Groups → Inbound Rules → Add Rule → SSH (22) → Source: 0.0.0.0/0
- **DigitalOcean:** Networking → Firewalls → Add Rule → SSH (22) → All IPv4/IPv6
- **Azure:** Network Security Group → Inbound Rule → Port 22 → Source: Any
- **GCP:** VPC Network → Firewall → New Rule → tcp:22 → Source: 0.0.0.0/0

---

### 4. Teste a Conexão

Execute o workflow de teste:

1. Vá em **Actions** no GitHub
2. Selecione **🧪 Test SSH Connection**
3. Clique em **Run workflow**

**Se passou:** ✅ Pode rodar o deploy!  
**Se falhou:** Continue no passo 5

---

### 5. Debug (se ainda não funcionar)

Execute no seu computador:

```bash
# Teste manual de SSH
ssh -vvv seu_usuario@seu_vps

# Teste de porta
nc -zv seu_vps 22

# Verifique se o VPS responde
ping seu_vps
```

Compartilhe o output desses comandos para análise detalhada.

---

## 📊 Causas Comuns (em ordem de frequência)

| # | Causa | Solução | Frequência |
|---|-------|---------|------------|
| 1 | Secret `VPS_SSH_KEY` incorreto ou incompleto | Copiar TODA a chave privada | 60% |
| 2 | Firewall/Security Group bloqueando porta 22 | Liberar porta 22 | 25% |
| 3 | Chave pública não está no VPS | Adicionar em `~/.ssh/authorized_keys` | 10% |
| 4 | VPS offline ou IP errado | Verificar status e IP | 4% |
| 5 | Formato de chave incompatível | Converter para OpenSSH | 1% |

---

## 🎯 Teste Rápido (1 minuto)

Execute no seu computador:

```bash
# Substitua os valores
VPS_HOST="SEU_IP_OU_DOMINIO"
VPS_USER="SEU_USUARIO"

# Teste
ssh -o ConnectTimeout=10 $VPS_USER@$VPS_HOST "echo 'Conexão OK'"
```

**Se funcionou:** O problema é nos secrets do GitHub  
**Se falhou:** O problema é no VPS/firewall

---

## 📁 Arquivos de Ajuda Criados

1. **`.github/TROUBLESHOOTING_DEPLOY.md`** - Guia completo de troubleshooting
2. **`.github/SETUP_SECRETS.md`** - Como configurar secrets passo a passo
3. **`.github/workflows/test-ssh.yml`** - Workflow para testar conexão
4. **`scripts/test-vps-connection.sh`** - Script de teste local

---

## 🚀 Depois de Corrigir

1. Execute o workflow de teste: **🧪 Test SSH Connection**
2. Se passou, execute o deploy: **Deploy portfolio to VPS**
3. Acesse seu site!

---

## 🆘 Ainda com Problemas?

Forneça estas informações:

```bash
# 1. Teste de conectividade
ping -c 3 SEU_VPS_HOST

# 2. Teste de porta
nc -zv SEU_VPS_HOST 22

# 3. Teste SSH detalhado
ssh -vvv SEU_USUARIO@SEU_VPS_HOST exit 2>&1 | tail -50

# 4. Info do sistema
uname -a
```

E responda:
- Qual cloud provider? (AWS, DigitalOcean, Azure, Contabo, etc)
- Qual sistema operacional do VPS? (Ubuntu 20.04, CentOS 7, etc)
- Você consegue conectar via SSH do seu computador?
- Os secrets estão configurados no GitHub?
