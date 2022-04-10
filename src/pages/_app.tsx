import type { AppProps } from 'next/app'

import '../styles/globals.css'
import '../styles/responsibility.css'

export default function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
