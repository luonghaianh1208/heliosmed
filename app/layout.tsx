import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin', 'vietnamese'] })

export const metadata: Metadata = {
  title: 'HeliosMed – Nền tảng Quản trị Y tế BVĐK Đức Giang',
  description: 'Hệ thống quản lý chất lượng, tài liệu và an toàn người bệnh tập trung',
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="vi" suppressHydrationWarning>
      <body className={inter.className}>{children}</body>
    </html>
  )
}
