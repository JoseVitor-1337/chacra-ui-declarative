import Head from "next/head"

function HtmlHead() {
	return (
		<Head>
			<title>Chacra UI - Todo List</title>
			<link rel="manifest" href="/manifest.json" />
			<meta
				name="description"
				content="Aprendendo a Chacra UI, declarações feitas no próprio componente"
			/>
		</Head>
	)
}

export default HtmlHead
