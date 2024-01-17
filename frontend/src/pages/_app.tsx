import MainChakraProvider from '@/providers/chakra'
import '@/styles/globals.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <MainChakraProvider>

    <Component {...pageProps} />
  </MainChakraProvider> 
}
