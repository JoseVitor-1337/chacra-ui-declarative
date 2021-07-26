import { Meta, Story } from "@storybook/react/types-6-0"
import Header from "."

export default {
	component: Header,
	title: "Header "
} as Meta

export const Basic: Story = (args) => <Header {...args} />
