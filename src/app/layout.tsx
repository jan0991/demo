import './globals.css'
import { IBM_Plex_Sans } from 'next/font/google'

const ibm = IBM_Plex_Sans({ weight: ["400", "700"], preload: false });

export const metadata = {
  title: 'Seat Management',
  description: 'Seat Management by blenderbox',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={ibm.className}>
        {children}
        </body>
    </html>
  )
}
