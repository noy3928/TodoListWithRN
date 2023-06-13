import { NavigationProp, RouteProp } from "@react-navigation/native"

export type Tasks = Task[]

export type Task = {
  id: string
  content: string
  updated_at?: string
  created_at?: string
}

export type RootStackParamList = {
  Home: undefined
  Detail: { id: string; content: string }
}

export type HomeScreenNavigationProp = NavigationProp<
  RootStackParamList,
  "Home"
>

export type DetailScreenRouteProp = RouteProp<RootStackParamList, "Detail">
