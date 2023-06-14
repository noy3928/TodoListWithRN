import axiosInstance from "./baseApi"
import { Todo } from "../../shared/types"

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

export const updateTodo = async ({ id, content }: Todo) => {
  try {
    console.log(id, content)
    const response = await axiosInstance.patch(`/todo/${id}`, { content })
    return response.data
  } catch (error) {
    console.error(error)
  }
}

export const deleteTodo = async (id: string) => {
  try {
    const response = await axiosInstance.delete(`/todo/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
  }
}
