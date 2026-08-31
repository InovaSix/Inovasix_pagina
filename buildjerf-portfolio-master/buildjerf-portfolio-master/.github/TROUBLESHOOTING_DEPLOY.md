# 🔧 Troubleshooting - Deploy SSH Connection Failed

## ❌ Erro Atual
```
dial tcp ***:22: i/o timeout
```

O GitHub Actions não consegue conectar ao VPS via SSH na porta 22.

---

## ✅ Checklist de Diagnóstico

### 1️⃣ **Verificar se o VPS está online e acessível**

Teste do seu computador local:
```bash
# Testar ping
ping SEU_VPS_HOST

# Testar conexão SSH (substitua valores)
ssh -p 22 SEU_USUARIO@SEU_VPS_HOST
```

**Resultado esperado:** Conexão SSH bem-sucedida

---

### 2️⃣ **Verificar Secrets do GitHub**

Vá em: **Settings → Secrets and variables → Actions**

Secrets obrigatórios:
- ✅ `VPS_HOST` - IP ou domínio do VPS (ex: `192.168.1.100` ou `meu-vps.com`)
- ✅ `VPS_USER` - Usuário SSH (ex: `root` ou `ubuntu`)
- ✅ `VPS_SSH_KEY` - Chave privada SSH (conteúdo completo do arquivo `id_rsa`)

**Como obter a chave privada:**
```bash
# No seu computador local (onde você tem acesso SSH ao VPS)
cat ~/.ssh/id_rsa
```

Copie **TODO** o conteúdo (incluindo `-----BEGIN OPENSSH PRIVATE KEY-----` e `-----END OPENSSH PRIVATE KEY-----`)

---

### 3️⃣ **Verificar Firewall do VPS**

O VPS precisa aceitar conexões SSH dos IPs do GitHub Actions.

**Opção A: Liberar todos os IPs do GitHub (recomendado)**

```bash
# Conectar ao VPS via SSH
ssh seu_usuario@seu_vps

# Se usar UFW (Ubuntu/Debian)
sudo ufw allow 22/tcp
sudo ufw reload

# Se usar firewalld (CentOS/RHEL)
sudo firewall-cmd --permanent --add-port=22/tcp
sudo firewall-cmd --reload

# Verificar status
sudo ufw status  # ou: sudo firewall-cmd --list-all
```

**Opção B: Liberar apenas IPs do GitHub Actions**

Lista de IPs: https://api.github.com/meta

```bash
# Exemplo com UFW
sudo ufw allow from 140.82.112.0/20 to any port 22
sudo ufw allow from 143.55.64.0/20 to any port 22
# ... adicione os outros ranges
```

---

### 4️⃣ **Verificar Grupos de Segurança (Cloud Providers)**

Se seu VPS está em cloud (AWS, Azure, GCP, DigitalOcean):

**AWS EC2:**
- Vá em **EC2 → Security Groups**
- Edite o grupo de segurança da instância
- Adicione regra: **SSH (22) | Source: 0.0.0.0/0** (ou IPs do GitHub)

**DigitalOcean:**
- Vá em **Networking → Firewalls**
- Adicione regra: **SSH | Port: 22 | Sources: All IPv4, All IPv6**

**Azure:**
- Vá em **Network Security Group**
- Adicione **Inbound Rule: SSH (22) | Source: Any**

**GCP:**
- Vá em **VPC Network → Firewall**
- Crie regra: **tcp:22 | Source: 0.0.0.0/0**

---

### 5️⃣ **Testar Conexão do GitHub Actions**

Crie um workflow de teste simples:

```yaml
# .github/workflows/test-ssh.yml
name: Test SSH Connection

on:
  workflow_dispatch:

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - name: Test SSH
        uses: appleboy/ssh-action@v1.2.0
        with:
          host: ${{ secrets.VPS_HOST }}
          username: ${{ secrets.VPS_USER }}
          key: ${{ secrets.VPS_SSH_KEY }}
          port: 22
          script: |
            echo "✅ SSH connection successful!"
            whoami
            pwd
            ls -la
```

Execute manualmente: **Actions → Test SSH Connection → Run workflow**

---

### 6️⃣ **Verificar SSH no VPS**

```bash
# Conectar ao VPS
ssh seu_usuario@seu_vps

# Verificar se SSH está rodando
sudo systemctl status ssh     # Ubuntu/Debian
sudo systemctl status sshd    # CentOS/RHEL

# Se não estiver rodando, iniciar
sudo systemctl start ssh
sudo systemctl enable ssh

# Verificar porta SSH
sudo grep "^Port" /etc/ssh/sshd_config

# Verificar se está escutando
sudo netstat -tlnp | grep :22
# ou
sudo ss -tlnp | grep :22
```

---

### 7️⃣ **Verificar Formato da Chave SSH**

A chave precisa estar em formato OpenSSH (não PEM):

```bash
# No seu computador local
head -1 ~/.ssh/id_rsa
```

**Deve mostrar:**
```
-----BEGIN OPENSSH PRIVATE KEY-----
```

**Se mostrar algo diferente (ex: `BEGIN RSA PRIVATE KEY`), converter:**
```bash
ssh-keygen -p -m PEM -f ~/.ssh/id_rsa
# Pressione Enter para manter a mesma senha
```

---

## 🚀 Correção Rápida - Porta SSH Customizada

Se seu VPS usa porta diferente de 22 (ex: 2222):

Atualizar `.github/deploy-subapp.json`:
```json
{
  "SSH_PORT": "2222"
}
```

---

## 🐛 Debug Avançado

### Testar do próprio GitHub Actions:

Adicione step de debug antes do deploy:

```yaml
- name: Debug SSH Connection
  run: |
    echo "Testing connection to ${{ secrets.VPS_HOST }}"
    nc -zv ${{ secrets.VPS_HOST }} 22 || echo "Port 22 not reachable"
    curl -s https://api.github.com/meta | jq -r '.actions[]' | head -5
```

---

## 📝 Checklist Final

- [ ] VPS está online e respondendo a ping
- [ ] Consigo conectar via SSH do meu computador local
- [ ] Secret `VPS_HOST` está correto (IP ou domínio)
- [ ] Secret `VPS_USER` está correto
- [ ] Secret `VPS_SSH_KEY` contém a chave privada completa
- [ ] Firewall do VPS permite porta 22
- [ ] Cloud provider permite porta 22 (Security Group/Firewall)
- [ ] SSH daemon está rodando no VPS
- [ ] Chave SSH está em formato OpenSSH
- [ ] Workflow de teste SSH passou

---

## 💡 Solução Alternativa - Deploy Manual

Se precisar urgente enquanto resolve SSH:

```bash
# No seu computador local
git clone https://github.com/jerfsonsilva/buildjerf-portfolio.git
cd buildjerf-portfolio
npm ci
npx prisma generate
npm run build

# Enviar via rsync
rsync -avz --delete out/ seu_usuario@seu_vps:/buildjerf/sub-apps/buildjerf-portfolio/root/
```

---

## 📞 Próximos Passos

1. Execute cada item do checklist acima
2. Se continuar com erro, compartilhe:
   - Output do `ping SEU_VPS_HOST`
   - Output do `ssh -vvv seu_usuario@seu_vps` (modo verbose)
   - Logs do workflow do GitHub Actions
   - Qual cloud provider está usando (AWS, Azure, DO, etc)
