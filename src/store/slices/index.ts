import { combineReducers } from "@reduxjs/toolkit"
import todoReducer from "./todos"
import modalReducer from "./modal"

const rootReducer = combineReducers({
  todos: todoReducer,
  modal: modalReducer,
})

export default rootReducer
