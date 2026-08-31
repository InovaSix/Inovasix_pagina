# 🔐 Como Configurar os Secrets do GitHub

## Passo a Passo Completo

### 1️⃣ Acesse as Configurações de Secrets

1. Vá para o repositório no GitHub: https://github.com/jerfsonsilva/buildjerf-portfolio
2. Clique em **Settings** (Configurações)
3. No menu lateral, clique em **Secrets and variables** → **Actions**
4. Clique no botão **New repository secret**

---

### 2️⃣ Configurar VPS_HOST

**Nome do secret:** `VPS_HOST`

**Valor:** O IP ou domínio do seu VPS

**Exemplos:**
```
192.168.1.100
```
ou
```
meu-servidor.com.br
```

**Como descobrir o IP do VPS:**
```bash
# Se você está conectado ao VPS
curl ifconfig.me

# Ou
hostname -I
```

**Depois de configurar:**
- Clique em **Add secret**

---

### 3️⃣ Configurar VPS_USER

**Nome do secret:** `VPS_USER`

**Valor:** Nome do usuário SSH

**Exemplos comuns:**
- `root` (se você tem acesso root)
- `ubuntu` (Ubuntu)
- `admin` (Debian)
- `ec2-user` (AWS)
- Ou seu usuário customizado

**Como descobrir:**
```bash
# Se você está conectado ao VPS
whoami
```

**Depois de configurar:**
- Clique em **Add secret**

---

### 4️⃣ Configurar VPS_SSH_KEY (MAIS IMPORTANTE)

**Nome do secret:** `VPS_SSH_KEY`

**Valor:** Conteúdo completo da sua chave privada SSH

#### Opção A: Se você já tem chave SSH configurada

```bash
# No seu computador LOCAL (não no VPS)
cat ~/.ssh/id_rsa
```

**Copie TODO o conteúdo**, incluindo as linhas:
```
-----BEGIN OPENSSH PRIVATE KEY-----
...várias linhas de código...
-----END OPENSSH PRIVATE KEY-----
```

#### Opção B: Se você NÃO tem chave SSH

**Criar nova chave SSH:**

```bash
# No seu computador LOCAL
ssh-keygen -t rsa -b 4096 -C "github-actions@buildjerf"

# Pressione Enter 3 vezes (sem senha)
# Isso cria:
# - Chave privada: ~/.ssh/id_rsa
# - Chave pública: ~/.ssh/id_rsa.pub
```

**Copiar chave pública para o VPS:**

```bash
# Método 1: ssh-copy-id (mais fácil)
ssh-copy-id -i ~/.ssh/id_rsa.pub seu_usuario@seu_vps

# Método 2: Manual
cat ~/.ssh/id_rsa.pub
# Copie o output

# Conecte ao VPS e adicione:
ssh seu_usuario@seu_vps
mkdir -p ~/.ssh
echo "COLE_A_CHAVE_PUBLICA_AQUI" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

**Testar conexão:**

```bash
# No seu computador LOCAL
ssh -i ~/.ssh/id_rsa seu_usuario@seu_vps

# Deve conectar SEM pedir senha
```

**Copiar chave PRIVADA para o GitHub:**

```bash
# No seu computador LOCAL
cat ~/.ssh/id_rsa
```

Cole no secret `VPS_SSH_KEY` no GitHub

**Depois de configurar:**
- Clique em **Add secret**

---

## 🧪 Testar Configuração

Depois de adicionar os 3 secrets:

1. Vá em **Actions** no GitHub
2. Clique em **🧪 Test SSH Connection** (workflow criado)
3. Clique em **Run workflow**
4. Aguarde execução

**Se passou:** ✅ Secrets estão corretos!  
**Se falhou:** ❌ Revise os passos acima

---

## ⚠️ Problemas Comuns

### Problema 1: "Permission denied (publickey)"

**Solução:** A chave pública não está no VPS

```bash
# Conecte ao VPS com senha
ssh seu_usuario@seu_vps

# Verifique se a chave está lá
cat ~/.ssh/authorized_keys

# Se não estiver, adicione:
mkdir -p ~/.ssh
echo "SUA_CHAVE_PUBLICA" >> ~/.ssh/authorized_keys
chmod 700 ~/.ssh
chmod 600 ~/.ssh/authorized_keys
```

### Problema 2: "Connection timeout"

**Solução:** Firewall bloqueando conexões

```bash
# No VPS
sudo ufw allow 22/tcp
sudo ufw reload
sudo systemctl status ssh
```

### Problema 3: "Invalid format"

**Solução:** Chave privada está corrompida

- Copie novamente o conteúdo COMPLETO de `~/.ssh/id_rsa`
- Incluindo `-----BEGIN` e `-----END`
- Sem espaços extras ou quebras de linha

---

## 📊 Resumo Visual

```
Seu Computador          GitHub Actions          VPS
    LOCAL                   RUNNER            SERVIDOR
      |                       |                   |
      |-- Chave Privada ----->|                   |
      |   (VPS_SSH_KEY)       |                   |
      |                       |                   |
      |                       |-- SSH Connect --> |
      |                       |   (porta 22)      |
      |                       |                   |
      |                       |<-- Authorized ----|
      |                       |                   |
      |                       |-- Deploy -------> |
      |                       |                   |
```

**Chave PRIVADA** → No GitHub Secret  
**Chave PÚBLICA** → No VPS em `~/.ssh/authorized_keys`

---

## ✅ Checklist Final

Antes de rodar o deploy:

- [ ] Secret `VPS_HOST` configurado
- [ ] Secret `VPS_USER` configurado
- [ ] Secret `VPS_SSH_KEY` configurado (chave privada COMPLETA)
- [ ] Chave pública está em `~/.ssh/authorized_keys` no VPS
- [ ] Consigo conectar via SSH do meu computador: `ssh seu_usuario@seu_vps`
- [ ] Workflow **Test SSH Connection** passou

---

## 🆘 Precisa de Ajuda?

Se continuar com problemas:

1. Execute no seu computador:
```bash
ssh -vvv seu_usuario@seu_vps
```

2. Copie o output completo
3. Compartilhe comigo junto com:
   - Qual cloud provider está usando (AWS, DigitalOcean, etc)
   - Sistema operacional do VPS (Ubuntu, CentOS, etc)
   - Output do workflow de teste
