import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit"
import { Todos } from "../../shared/types"
import { RootState } from "../index"

const initialState: { isLoading: boolean; todos: Todos; error: any } = {
  isLoading: false,
  todos: [],
  error: null,
}

export const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchTodoSuccess: (state, action: PayloadAction<Todos>) => {
      state.isLoading = true
      const newState = state.todos.concat(action.payload)
      state.todos = newState
    },
    fetchTodoFailure: (state, { payload: error }) => {
      state.isLoading = false
      state.error = error
    },
    fetchTodos: state => {
      state.isLoading = false
    },
    addTodoSuccess: (state, { payload: todo }) => {
      state.isLoading = true
      state.todos.push(todo)
    },
    addTodoFailure: (state, { payload: error }) => {
      state.isLoading = false
      state.error = error
    },
    addTodo: (state, { payload: todo }) => {
      state.isLoading = false
    },
    deleteTodoSuccess: (state, { payload: id }) => {
      state.isLoading = true
      const newState = state.todos.filter(todo => todo.id !== id)
      state.todos = newState
    },
    deleteTodoFailure: (state, { payload: error }) => {
      state.isLoading = false
      state.error = error
    },
    deleteTodo: (state, { payload: id }) => {
      state.isLoading = false
    },
  },
})

const selectAllState = createSelector(
  (state: RootState) => state.todos.isLoading,
  (state: RootState) => state.todos.todos,
  (state: RootState) => state.todos.error,
  (isLoading, todos, error) => {
    return { isLoading, todos, error }
  }
)

export const todoSelector = {
  all: (state: RootState) => selectAllState(state),
}

export const todoActions = slice.actions
export default slice.reducer
