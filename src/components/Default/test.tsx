import { render, screen } from "@testing-library/react"

import Main from "."

describe("<Main />", () => {
	it("It should render the Heading", () => {
		render(<Main />)

		const hasHeader = screen.getByRole("heading", {
			name: /bem vindo ao boilerplate/i
		})

		expect(hasHeader).toBeInTheDocument()
	})

	it("Should render colors correctly", () => {
		const { container } = render(<Main />)

		expect(container.firstChild).toHaveStyle({ "background-color": "#4c10e3" })
	})
})
