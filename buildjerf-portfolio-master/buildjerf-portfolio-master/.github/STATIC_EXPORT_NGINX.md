# Nginx + export estático (Next.js `out/`)

O build gera rotas como `inova-labs.html`. O script `postbuild` também cria `inova-labs/index.html` para o nginx resolver `/inova-labs`.

No bloco `location /` do site, use algo como:

```nginx
root /caminho/para/out;
index index.html;
try_files $uri $uri/ $uri.html =404;
```

Sem `$uri/` ou `$uri.html`, URLs como `/inova-labs` retornam **404 Not Found** mesmo com o build correto.
