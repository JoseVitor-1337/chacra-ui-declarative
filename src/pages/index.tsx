import { VStack } from "@chakra-ui/react"
import { useState } from "react"
import { FaSun } from "react-icons/fa"

import Header from "components/Header"
import ButtonIcon from "components/ButtonIcon"
import TodoList from "components/TodoList"
import AddTodo from "components/AddTodo"

export interface Todo {
	id: number
	text: string
}

export default function Home() {
	const [todos, setTodos] = useState<Todo[]>([])

	return (
		<VStack p={4}>
			<Header />
			<TodoList todos={todos} setTodos={setTodos} />
			<AddTodo setTodos={setTodos} />
		</VStack>
	)
}
