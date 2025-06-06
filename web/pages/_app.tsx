import '@/pages/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from '@/components/ThemeProvider'
import { ThemeToggle } from '@/components/ThemeToggle'

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
      <ThemeToggle />
    </ThemeProvider>
  )
} 