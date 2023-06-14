import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit"
import { Todos } from "../../shared/types"
import { RootState } from "../index"

const initialState: {
  isLoading: boolean
  todos: Todos
  error: any
  editInfo: { content: string; id: string }
} = {
  isLoading: false,
  todos: [],
  error: null,
  editInfo: { content: "", id: "" },
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
    getEditInfo: (state, { payload: { content, id } }) => {
      state.editInfo.content = content
      state.editInfo.id = id
    },
    updateTodoSuccess: (state, { payload: todo }) => {
      state.isLoading = true
      const newState = state.todos.map(item => {
        if (item.id === todo.id) {
          return todo
        }
        return item
      })
      state.todos = newState
    },
    updateTodoFailure: (state, { payload: error }) => {
      state.isLoading = false
      state.error = error
    },
    updateTodo: (state, { payload: todo }) => {
      state.isLoading = false
    },
  },
})

const selectAllState = createSelector(
  (state: RootState) => state.todos.isLoading,
  (state: RootState) => state.todos.todos,
  (state: RootState) => state.todos.error,
  (state: RootState) => state.todos.editInfo,
  (isLoading, todos, error, editInfo) => {
    return { isLoading, todos, error, editInfo }
  }
)

export const todoSelector = {
  all: (state: RootState) => selectAllState(state),
}

export const todoActions = slice.actions
export default slice.reducer
