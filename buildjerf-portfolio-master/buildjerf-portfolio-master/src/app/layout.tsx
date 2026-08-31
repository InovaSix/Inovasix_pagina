import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Inovasistema - Inovação e Tecnologia sob Medida",
  description: "Transformamos ideias em soluções digitais de alto impacto. Especialistas em IA, Sistemas Customizados e Design Premium.",
  keywords: "inovasistema, tecnologia, inteligência artificial, software factory, sistemas sob medida, design premium",
  authors: [{ name: "Inovasistema Team" }],
  creator: "Inovasistema",
  publisher: "Inovasistema",
  robots: "index, follow",
  openGraph: {
    type: "website",
    locale: "pt_BR",
    url: "https://inovasistema.com.br",
    title: "Inovasistema - Inovação e Tecnologia sob Medida",
    description: "Transformamos ideias em soluções digitais de alto impacto.",
    siteName: "Inovasistema",
  },
  twitter: {
    card: "summary_large_image",
    title: "Inovasistema - Inovação e Tecnologia sob Medida",
    description: "Transformamos ideias em soluções digitais de alto impacto.",
    creator: "@inovasistema",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#0B0F1A] text-white`}>
        {children}
      </body>
    </html>
  );
}
