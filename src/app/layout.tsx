import '@/styles/global.css'
import '@mdxeditor/editor/style.css'
import type { Metadata } from 'next'

interface RootLayoutProps {
  readonly children: React.ReactNode
}

export const metadata: Metadata = {
  title: 'Bloggy',
  description: 'Crear y gestionar tu blog nunca ha sido más sencillo.',
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <html lang="es-MX">
      <body>
        <main className="bg-white px-6 py-32 lg:px-8">{children}</main>
      </body>
    </html>
  )
}
