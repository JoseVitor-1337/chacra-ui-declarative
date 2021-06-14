import { Meta, Story } from "@storybook/react/types-6-0"
import Main from "."

export default {
	component: Main,
	title: "Main"
} as Meta

export const Basic: Story = (args) => <Main {...args} />
Basic.argTypes = {
	backgroundColor: { control: "color" }
}
