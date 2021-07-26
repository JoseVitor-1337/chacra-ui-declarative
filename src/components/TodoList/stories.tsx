import { Meta, Story } from "@storybook/react/types-6-0"
import TodoList from "."

export default {
	component: TodoList,
	title: "TodoList "
} as Meta

function setTodos() {
	return
}

const todos = [
	{ id: 1, text: "Primeira tarefa" },
	{ id: 2, text: "Segunda tarefa" }
]

export const Basic: Story = (args) => (
	<TodoList todos={todos} setTodos={setTodos} {...args} />
)
