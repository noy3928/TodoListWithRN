import axiosInstance from "./api"
import { Todo } from "../shared/types"

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
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const updateTodo = ({ id, content }: Todo) => {
  return axiosInstance.put(`/todo/${id}`, { content })
}

export const deleteTodo = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/todo/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
