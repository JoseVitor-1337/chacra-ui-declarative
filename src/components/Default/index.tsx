import * as S from "./styles"

function Default({
	title = "Bem vindo ao Boilerplate",
	description = "Configurações de VSCode, Jest, Husky, PWA, Typescript, NextJS, ReactJS, Styled components e Storybook como ferramentas para criar um ambiente de desenvolvimento Frontend"
}) {
	return (
		<S.Wrapper>
			<S.Container>
				<S.Title>{title}</S.Title>
				<S.Description>{description}</S.Description>
			</S.Container>

			<S.Illustration
				src="./img/dev.svg"
				alt="Ilustração de um desenvolvedor escrevendo em 3 computadores"
			/>
		</S.Wrapper>
	)
}

export default Default
