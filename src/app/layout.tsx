import type { Metadata } from 'next'
import { Inter, JetBrains_Mono } from 'next/font/google'
import './styles/tokens.css'
import './styles/layout.css'
import './styles/sections.css'
import './styles/project.css'
import './styles/additions.css'
import './styles/responsive.css'

const inter = Inter({ subsets: ['latin'], weight: ['400', '500', '600', '700'], variable: '--font-inter' })
const mono = JetBrains_Mono({ subsets: ['latin'], weight: ['400', '500', '700'], variable: '--font-mono' })

const DESCRIPTION =
  '도메인을 빠르게 이해하고 시스템으로 풀어내는 5년차 풀스택 개발자 이주성의 포트폴리오. 운수 ERP·실시간 관제·DTG 통신 서버·임상 eTMF.'

export const metadata: Metadata = {
  metadataBase: new URL('https://joosung.dev'),
  title: '이주성 · Full-Stack Developer Portfolio',
  description: DESCRIPTION,
  openGraph: {
    title: '이주성 · Full-Stack Developer Portfolio',
    description: DESCRIPTION,
    url: 'https://joosung.dev',
    locale: 'ko_KR',
    type: 'website',
  },
}

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ko" className={`${inter.variable} ${mono.variable}`}>
      <head>
        <link
          rel="stylesheet"
          crossOrigin="anonymous"
          href="https://cdn.jsdelivr.net/gh/orioncactus/pretendard@v1.3.9/dist/web/variable/pretendardvariable-dynamic-subset.min.css"
        />
      </head>
      <body>{children}</body>
    </html>
  )
}
