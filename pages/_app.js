import Layout from '@/components/Layout';
import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export default function App({ Component, pageProps, ...appProps }) {
  return (
  <ChakraProvider >
    {
      [`/`].includes(appProps.router.pathname) ?(
        <Component {...pageProps} />
      ):(
        <Layout>
        <Component {...pageProps} />
        </Layout>
      )

    }

  </ChakraProvider>
 )
}
