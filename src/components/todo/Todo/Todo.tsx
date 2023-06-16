import React from "react"
import {
  Todo as TodoType,
  HomeScreenNavigationProp,
} from "../../../shared/types"
import { useHandleOpenModal } from "../../../services/hooks"

import { useDispatch } from "react-redux"
import * as todoSlice from "../../../store/slices/todos"

import TodoView from "./view/TodoView"

interface Props {
  item: TodoType
  navigation: HomeScreenNavigationProp
}

export default function Todo({ item, navigation }: Props) {
  const dispatch = useDispatch()
  const handleOpenModal = useHandleOpenModal()

  const handleDelete = () => {
    const { deleteTodo } = todoSlice.todoActions
    dispatch(deleteTodo(item.id))
  }

  const handleCompletionStatus = () => {
    const { updateCompletionStatus } = todoSlice.todoActions
    dispatch(updateCompletionStatus(item.id))
  }

  const navigateDetail = () => {
    navigation.navigate("Detail", {
      content: item.content,
      id: item.id,
      isCompleted: item.isCompleted,
    })
  }

  const handleOpenEditModal = () => {
    handleOpenModal("EDIT", { content: item.content, id: item.id })
  }

  const props = {
    handleDelete,
    handleCompletionStatus,
    checkboxKey: item.isCompleted?.toString(),
    isChecked: item.isCompleted,
    item,
    navigateDetail,
    handleOpenEditModal,
  }

  return <TodoView {...props} />
}
