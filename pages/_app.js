import {
  ChakraProvider,
  extendTheme
} from "@chakra-ui/react"
import '../styles/globals.css'

function YFS({ Component, pageProps }) {
  return (
  <ChakraProvider theme={extendTheme({
    initialColorMode: 'light',
    styles: {
      global: () => ({
        body: {
          bg:'#FFFEFC',
          fontFamily: "'Montserrat', sans-serif",
          color:'#4A5568'
        },
        html: {
          colorScheme:'light'
        }
      }),
    },
  })}>
    <Component {...pageProps} />
  </ChakraProvider>
  );
}

export default YFS