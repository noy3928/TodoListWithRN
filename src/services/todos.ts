import axiosInstance from "./api"
import { Todo } from "../shared/types"

type TodoContent = Pick<Todo, "content">
type TodoId = Pick<Todo, "id">

export const getTodos = async () => {
  try {
    const response = await axiosInstance.get("/todo")
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const createTodo = (content: TodoContent) => {
  return axiosInstance.post("/todo", { content })
}

export const updateTodo = ({ id, content }: Todo) => {
  return axiosInstance.put(`/todo/${id}`, { content })
}

export const deleteTodo = (id: TodoId) => {
  return axiosInstance.delete(`/todo/${id}`)
}
