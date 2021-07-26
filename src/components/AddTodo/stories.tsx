import { Meta, Story } from "@storybook/react/types-6-0"
import AddTodo from "."

export default {
	component: AddTodo,
	title: "AddTodo "
} as Meta

function setTodos() {
	return
}

export const Basic: Story = (args) => <AddTodo setTodos={setTodos} {...args} />
