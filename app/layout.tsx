export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const header = (
    <header>
      <div>
        <h1>Leo's Blog</h1>
        <p> Welcoome to my tech Blog</p>
        <br />
      </div>
    </header>
  )

  const footer = (
    <footer>
      <div>
        <br />
        <p>Develped by Leo</p>
      </div>
    </footer>
  )
  return (
    <html>
      <head />
      <body>
        {header}
        {children}
        {footer}
        </body>
    </html>
  )
}
