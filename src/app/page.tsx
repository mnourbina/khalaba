import Link from "next/link";

export default function HomePage() {
  return (
    <main className="mx-auto flex min-h-screen max-w-xl flex-col items-center justify-center px-6 text-center">
      <img src="/logo.jpg" alt="KHALABA" className="mb-4 w-56 rounded-2xl" />
      <h1 className="text-3xl font-black tracking-widest">KHALABA</h1>
      <p className="mt-2 text-sm font-semibold text-khalaba-terracotta">Conseils · Alertes · Indicateurs</p>
      <Link href="/fr/login" className="mt-8 rounded-xl bg-khalaba-terracotta px-6 py-3 font-bold text-white">Accès professionnel</Link>
    </main>
  );
}
