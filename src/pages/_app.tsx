import { AppProps } from "next/app"
import Head from "components/Head"

import { ChakraProvider, ColorModeScript } from "@chakra-ui/react"

import Fonts from "styles/fonts"
import theme from "styles/theme"

function App({ Component, pageProps }: AppProps) {
	return (
		<ChakraProvider theme={theme}>
			<Fonts />
			<ColorModeScript initialColorMode="light" />
			<Head />
			<Component {...pageProps} />
		</ChakraProvider>
	)
}

export default App
