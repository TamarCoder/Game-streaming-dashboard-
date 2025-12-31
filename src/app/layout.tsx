import type { Metadata } from 'next'
import '@/styles/index.scss'

export const metadata: Metadata = {
  title: 'Game Streaming Dashboard',
  description: 'Game Streaming Dashboard',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
