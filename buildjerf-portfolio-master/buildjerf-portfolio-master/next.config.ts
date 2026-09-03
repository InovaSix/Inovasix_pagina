import type { NextConfig } from "next";

// GitHub Pages (QA temporário) serve o site sob o subcaminho /Inovasix_pagina.
// basePath/assetPrefix só são aplicados quando GITHUB_PAGES=true, ativado
// exclusivamente pelo workflow .github/workflows/pages-preview.yml.
// O build local e o deploy da VPS (root slot) permanecem sem prefixo.
const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/Inovasix_pagina";
const basePath = isGithubPages ? githubPagesBasePath : "";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Exposto ao client para prefixar assets referenciados por tags HTML nativas
  // (ex.: <video src>), que não recebem basePath automaticamente como next/image.
  // Vazio no build local e no deploy da VPS; /Inovasix_pagina apenas no Pages.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
  ...(isGithubPages
    ? {
        basePath: githubPagesBasePath,
        assetPrefix: githubPagesBasePath,
      }
    : {}),
};

export default nextConfig;
