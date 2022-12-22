import Image from 'next/image'
import Link from 'next/link'
import '../styles/globals.css'

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div className="text-center bg-slate-800 my-6 p-8 rounded-md">
        <Link href={'/'}>
          <Image
            src="/logo.png"
            width={60}
            height={60}
            alt="logo"
            className="mx-auto rounded-full"
          />
          <h1 className="text-2xl text-white font-bold mt-4">Leo's Blog</h1>
        </Link>
        <p className="text-slate-300"> Welcome to my tech Blog</p>
        <br />
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div className="border-t border-slate-400 mt-12 py-6 text-center text-slate-400">
        <p>Develped by LeoCisAl</p>
      </div>
    </footer>
  )
  return (
    <html>
      <head />
      <body>
        <div className="mx-auto  max-w-2xl px-6">
          {header}
          {children}
          {footer}
        </div>
      </body>
    </html>
  )
}
