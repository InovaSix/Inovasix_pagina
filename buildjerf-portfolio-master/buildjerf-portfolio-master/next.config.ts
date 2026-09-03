import type { NextConfig } from "next";

const isGithubPages = process.env.GITHUB_PAGES === "true";
const githubPagesBasePath = "/Inovasix_pagina";
const basePath = isGithubPages ? githubPagesBasePath : "";

const nextConfig: NextConfig = {
  output: "export",
  basePath,
  assetPrefix: basePath ? `${basePath}/` : undefined,
  images: {
    unoptimized: true,
  },
  // Exposto ao client para prefixar assets referenciados por tags HTML nativas
  // (ex.: <video src>), que não recebem basePath automaticamente como next/image.
  // Vazio no build local e no deploy da VPS; /Inovasix_pagina apenas no Pages.
  env: {
    NEXT_PUBLIC_BASE_PATH: basePath,
  },
};

export default nextConfig;
