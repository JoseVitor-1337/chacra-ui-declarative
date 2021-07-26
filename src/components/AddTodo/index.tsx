import { memo, useState, SetStateAction, Dispatch } from "react"
import { useToast, HStack, Input, Button } from "@chakra-ui/react"
import { Todo } from "pages"

interface Props {
	setTodos: Dispatch<SetStateAction<Todo[]>>
}

function AddTodo({ setTodos }: Props) {
	const [content, setContent] = useState("")

	const toast = useToast()

	function TreatNewTodoId(oldTodos: Todo[]) {
		const id = oldTodos.length

		const todo = {
			id,
			text: content
		}

		const newTodos = [...oldTodos, todo]

		return newTodos
	}

	function DispatchToats() {
		toast({
			title: `Nenhuma tarefa escrita...`,
			status: "error",
			isClosable: true
		})
	}

	function addTodo() {
		if (content !== "") {
			setTodos((oldTodos: Todo[]) => TreatNewTodoId(oldTodos))
			setContent("")
		} else {
			DispatchToats()
		}
	}

	return (
		<HStack pt="4" w={["100%", "50%"]} alignItems="flex-start" mt="8">
			<Input
				value={content}
				onChange={(event) => setContent(event.target.value)}
				variant="filled"
				placeholder="Text..."
			/>
			<Button onClick={addTodo} type="submit" px="8" colorScheme="pink">
				Adicionar Tarefa
			</Button>
		</HStack>
	)
}

export default memo(AddTodo)
