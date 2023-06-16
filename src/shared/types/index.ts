import { NavigationProp, RouteProp } from "@react-navigation/native"

export type Todos = Todo[]

export type Todo = {
  id: string
  content: string
  isCompleted?: boolean
  updated_at?: string
  created_at?: string
}

export type PayloadTodos = {
  todos: Todos
  completionStatuses: { [key: string]: boolean }
}

export type RootStackParamList = {
  Home: undefined
  Detail: { id: string; content: string; isCompleted?: boolean }
}

export type HomeScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "Home"
>

export type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">

export type ActionType = {
  type: string
  payload: string
}

export type UpdateActionType = {
  type: string
  payload: Todo
}

export type ModalType = "ADD" | "EDIT" | undefined
