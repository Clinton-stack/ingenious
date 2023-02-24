import '@/styles/globals.css'
import { ChakraProvider, extendTheme } from '@chakra-ui/react'

export default function App({ Component, pageProps }) {

      const fonts ={
        body: 'Abel',
        heading: 'Abel'

      }
      const theme = extendTheme({fonts})
  return (
  <ChakraProvider theme={theme}>
 <Component {...pageProps} />
  </ChakraProvider>
 )
}
