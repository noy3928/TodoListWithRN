import { combineReducers } from "@reduxjs/toolkit"
import todoReducer from "./todos"

const rootReducer = combineReducers({
  todos: todoReducer,
})

export default rootReducer
