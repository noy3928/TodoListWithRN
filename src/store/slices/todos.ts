import { createSlice, PayloadAction, createSelector } from "@reduxjs/toolkit"
import { Todos, PayloadTodos } from "../../shared/types"
import { RootState } from "../index"

const initialState: {
  isLoading: boolean
  todos: Todos
  error: any
  editInfo: { content: string; id: string }
  displayCount: number
} = {
  isLoading: false,
  todos: [],
  error: null,
  editInfo: { content: "", id: "" },
  displayCount: 10,
}

export const slice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    fetchTodoSuccess: (state, action: PayloadAction<PayloadTodos>) => {
      state.isLoading = false
      const completionStatuses = action.payload.completionStatuses
      const newState = action.payload.todos.reverse().map(item => ({
        ...item,
        isCompleted: completionStatuses[item.id],
      }))
      state.todos = newState
    },
    fetchTodoFailure: (state, { payload: error }) => {
      state.isLoading = false
      state.error = error
    },
    fetchTodos: state => {
      state.isLoading = true
    },
    addTodoSuccess: (state, { payload: todo }) => {
      state.isLoading = false
      state.todos.unshift(todo)
    },
    addTodoFailure: (state, { payload: error }) => {
      state.isLoading = false
      state.error = error
    },
    addTodo: (state, { payload: todo }) => {
      state.isLoading = true
    },
    deleteTodoSuccess: (state, { payload: id }) => {
      state.isLoading = false
      const newState = state.todos.filter(todo => todo.id !== id)
      state.todos = newState
    },
    deleteTodoFailure: (state, { payload: error }) => {
      state.isLoading = false
      state.error = error
    },
    deleteTodo: (state, { payload: id }) => {
      state.isLoading = true
    },
    getEditInfo: (state, { payload: { content, id } }) => {
      state.editInfo.content = content
      state.editInfo.id = id
    },
    updateTodoSuccess: (state, { payload: todo }) => {
      state.isLoading = false
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
      state.isLoading = true
    },
    updateCompletionStatusSuccess: (state, { payload: id }) => {
      const newState = state.todos.map(item => {
        if (item.id === id) {
          return { ...item, isCompleted: !item.isCompleted }
        }
        return item
      })
      state.todos = newState
    },
    updateCompletionStatusFailure: (state, { payload: error }) => {
      state.error = error
    },
    updateCompletionStatus: (state, { payload: id }) => {},
    increaseDisplayCount: state => {
      state.displayCount += 10
    },
    resetDisplayCount: state => {
      state.displayCount = initialState.displayCount
    },
    resetError: state => {
      state.error = initialState.error
    },
  },
})

const selectAllState = createSelector(
  (state: RootState) => state.todos.isLoading,
  (state: RootState) => state.todos.todos.slice(0, state.todos.displayCount),
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
