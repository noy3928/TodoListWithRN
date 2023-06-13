import axiosInstance from "./api"
import { Todo } from "../shared/types"

type TodoId = Pick<Todo, "id">

export const getTodos = async () => {
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

export const deleteTodo = (id: TodoId) => {
  return axiosInstance.delete(`/todo/${id}`)
}
