import styled from "styled-components"

export const Wrapper = styled.main`
	background-color: #4c10e3;
	color: #fff;
	width: 100%;
	height: 100vh;
	padding: 3rem;

	text-align: center;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Container = styled.section`
	width: 50%;
	padding: 10px;
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`

export const Title = styled.h1`
	font-size: 3rem;
	margin-bottom: 1rem;
`

export const Description = styled.h2`
	font-size: 2rem;
	line-height: 2.5rem;
	font-weight: 500;
`

export const Illustration = styled.img`
	width: min(50rem, 100%);
`
