export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children, // child component during rendering
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
      <header>Header</header>
        {children}
        <footer>footer</footer>
        </body>
    </html>
  )
}
