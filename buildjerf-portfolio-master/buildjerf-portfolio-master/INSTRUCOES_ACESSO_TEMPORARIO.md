# 🔐 Instruções para Acesso Temporário

## Me envie estas informações:

### 1. **Dados do VPS**
```
IP ou Domínio: ____________________
Usuário SSH: _______________________
Senha SSH: _________________________
Porta SSH: _________________________ (geralmente 22)
Sistema Operacional: _______________ (Ubuntu, CentOS, etc)
```

### 2. **Acesso ao GitHub**

**Opção A: Me adicionar como colaborador (MAIS FÁCIL)**
1. Vá em: https://github.com/jerfsonsilva/buildjerf-portfolio/settings/access
2. Clique em **Add people**
3. Digite meu usuário do GitHub: **[ME INFORME SEU USUÁRIO GITHUB]**
4. Depois que resolver, você me remove

**Opção B: Personal Access Token**
1. GitHub → Settings → Developer settings → Personal access tokens → Tokens (classic)
2. **Generate new token (classic)**
3. Marque apenas: `repo` (Full control of private repositories)
4. Gerar e me enviar o token

---

## 🚀 O que vou fazer:

1. ✅ Gerar uma nova chave SSH exclusiva para deploy
2. ✅ Copiar a chave pública para seu VPS
3. ✅ Testar a conexão SSH
4. ✅ Configurar os 3 secrets no GitHub (VPS_HOST, VPS_USER, VPS_SSH_KEY)
5. ✅ Criar estrutura de diretórios no VPS (se necessário)
6. ✅ Configurar firewall (se necessário)
7. ✅ Executar workflow de teste
8. ✅ Fazer o deploy funcionar

**Tempo estimado: 5-10 minutos**

---

## 🔒 Segurança:

- Vou criar uma **chave SSH exclusiva** para o deploy
- Sua senha SSH **não será salva** em lugar nenhum
- Depois de configurar, você pode:
  - ✅ Remover meu acesso do GitHub
  - ✅ Trocar a senha SSH do VPS
  - ✅ A chave SSH continuará funcionando

---

## 📝 Informações do Cloud Provider (se aplicável):

Se seu VPS está em um cloud provider, também preciso saber:

**AWS EC2:**
- Acesso ao Security Group? (S/N)
- Se SIM, me envie screenshot ou me adicione temporariamente

**DigitalOcean:**
- Acesso ao Firewall? (S/N)
- Se SIM, me adicione temporariamente ou configure você mesmo:
  - Inbound: SSH (22), HTTP (80), HTTPS (443)
  - Sources: All IPv4, All IPv6

**Azure/GCP/Outros:**
- Qual provider: _______________
- Firewall configurado? (S/N)

---

## ⏱️ Pronto para começar?

Assim que me enviar:
1. Dados do VPS (IP, usuário, senha)
2. Acesso ao GitHub (colaborador OU token)

Eu começo imediatamente e te atualizo a cada passo! 🚀

---

## 🆘 Alternativa Mais Segura (se preferir):

Se não quiser me dar acesso total, podemos fazer por etapas:

1. **EU crio a chave SSH e te envio a chave pública**
2. **VOCÊ adiciona no VPS manualmente**
3. **EU testo e te dou os valores**
4. **VOCÊ configura os secrets no GitHub**

Qual opção você prefere? A ou B?
