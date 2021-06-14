import { AppProps } from "next/app"
import Head from "next/head"

import GlobalStyles from "styles/global"

function App({ Component, pageProps }: AppProps) {
	return (
		<>
			<Head>
				<title>React Avançado - Boilerplate</title>
				<link rel="manifest" href="/manifest.json" />
				<meta
					name="description"
					content="Aprendendo as ferramentas Typescript, NextJS, Jest, ReactJS e Styled Components"
				/>
			</Head>
			<GlobalStyles />

			<Component {...pageProps} />
		</>
	)
}

export default App
