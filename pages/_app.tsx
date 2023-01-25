import '@/styles/globals.css'
import type { AppProps } from 'next/app'
import {ChakraProvider} from "@chakra-ui/react";
import Defaultlayout from "@/layouts/defaultlayout";
import {ThemeProvider} from "next-themes";

export default function App({ Component, pageProps }: AppProps) {
  return(
      <ThemeProvider>
        <ChakraProvider>
            <Defaultlayout>
              <Component {...pageProps}/>
            </Defaultlayout>
        </ChakraProvider>
      </ThemeProvider>
  )
}
