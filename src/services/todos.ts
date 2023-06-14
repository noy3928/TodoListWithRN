import axiosInstance from "./api"
import { Todo } from "../shared/types"

type TodoId = Pick<Todo, "id">

export const fetchTodos = async () => {
  try {
    const response = await axiosInstance.get("/todo")
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const addTodo = async (content: string) => {
  try {
    const response = await axiosInstance.post("/todo/", { content })
    return response
  } catch (error) {
    console.error(error)
  }
}

export const updateTodo = ({ id, content }: Todo) => {
  return axiosInstance.put(`/todo/${id}`, { content })
}

export const deleteTodo = async (id: TodoId) => {
  try {
    const response = axiosInstance.delete(`/todo/${id}`)
    return response
  } catch (error) {
    console.error(error)
  }
}
