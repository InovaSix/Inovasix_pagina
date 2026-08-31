import Link from 'next/link'

export default function NotFound() {
  return (
    <main className="min-h-screen flex items-center justify-center bg-white px-6 py-20">
      <div className="max-w-xl text-center">
        <p className="text-sm uppercase tracking-[0.4em] text-[#00DDB3] font-semibold mb-4">
          Página não encontrada
        </p>
        <h1 className="text-5xl md:text-6xl font-extrabold text-[#1A1A2E] mb-6">
          404
        </h1>
        <p className="text-lg text-[#6B7280] mb-10">
          A página que você está tentando acessar não existe ou foi movida. Volte para a página inicial e continue navegando.
        </p>
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-full bg-[#00DDB3] px-8 py-4 text-white font-semibold transition hover:bg-[#00C9A2]"
        >
          Voltar para a home
        </Link>
      </div>
    </main>
  )
}
