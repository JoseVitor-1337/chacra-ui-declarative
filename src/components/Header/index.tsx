import { Heading } from "@chakra-ui/react"
import { memo } from "react"

function Header() {
	return (
		<Heading
			pb="4"
			fontSize={["3xl", "5xl"]}
			fontWeight="extrabold"
			bgGradient="linear(to-r, pink.300, pink.300, blue.500)"
			bgClip="text"
		>
			Todo App
		</Heading>
	)
}

export default memo(Header)
