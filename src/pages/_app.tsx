import { AppProps } from 'next/app'
import Head from 'next/head'

import { ChakraProvider } from '@chakra-ui/react'
import { Inter } from '@next/font/google'

const inter = Inter({ subsets: ['latin'] })

function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <Head>
        <title>Checkout Page with Chakra UI ⚛️</title>
      </Head>

      <main className={inter.className}>
        <Component {...pageProps} />
      </main>
    </ChakraProvider>
  )
}

export default App
