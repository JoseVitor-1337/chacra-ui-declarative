import { Meta, Story } from "@storybook/react/types-6-0"
import { FaTrash } from "react-icons/fa"
import ButtonIcon from "."

export default {
	component: ButtonIcon,
	title: "ButtonIcon "
} as Meta

export const Basic: Story = (args) => <ButtonIcon Icon={FaTrash} {...args} />
