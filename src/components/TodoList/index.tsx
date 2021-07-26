import { FC, memo, Dispatch, SetStateAction } from "react"
import {
	HStack,
	VStack,
	Text,
	StackDivider,
	Spacer,
	Center
} from "@chakra-ui/react"

import { FaTrash } from "react-icons/fa"

import ButtonIcon from "components/ButtonIcon"

interface Todo {
	id: number
	text: string
}

interface TodoProps {
	todos: Todo[]
	setTodos: Dispatch<SetStateAction<Todo[]>>
}

const TodoList = ({ todos, setTodos }: TodoProps) => {
	function deleteTodo(id: number) {
		const newTodos = todos.filter((todo) => todo.id !== id)

		setTodos(newTodos)
	}

	return (
		<VStack
			divider={<StackDivider />}
			borderColor="gray.100"
			borderWidth="2px"
			borderRadius="lg"
			alignItems="stretch"
			w={["100%", "70%", "50%"]}
			p={["1", "2"]}
		>
			{todos.length > 0 ? (
				todos.map((todo: Todo) => (
					<HStack p="1" key={todo.id}>
						<Text>{todo.text}</Text>
						<Spacer />
						<ButtonIcon Icon={FaTrash} onClick={() => deleteTodo(todo.id)} />
					</HStack>
				))
			) : (
				<Center p={["2", "3"]} direction="row">
					<Text fontWeight="medium">Não há mais nenhuma tarefa a fazer</Text>
				</Center>
			)}
		</VStack>
	)
}

export default memo(TodoList)
