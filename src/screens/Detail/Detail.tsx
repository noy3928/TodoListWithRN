import React, { useState } from "react"
import { DetailScreenRouteProp } from "../../shared/types"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import * as modalSlice from "../../store/slices/modal"
import * as todoSlice from "../../store/slices/todos"

import DetailView from "./view/DetailView"

import { useHandleOpenModal } from "../../services/hooks/useHandleOpenModal"

type DetailProps = {
  route: DetailScreenRouteProp
}

export default function Detail({ route }: DetailProps) {
  const dispatch = useDispatch()
  const { id, isCompleted: initCompleteStatus } = route.params
  const [isCompleted, setIsCompleted] = useState(initCompleteStatus)
  const { modalType } = useSelector(modalSlice.modalSelector.all)
  const { todos } = useSelector(todoSlice.todoSelector.all)
  const handleOpenModal = useHandleOpenModal()

  const content = todos.find(todo => todo.id === id)?.content ?? ""

  const handleCompleteStatus = () => {
    const { updateCompletionStatus } = todoSlice.todoActions
    setIsCompleted(!isCompleted)
    dispatch(updateCompletionStatus(id))
  }

  const handleOpenEditModal = () => {
    handleOpenModal("EDIT", { content, id })
  }

  const handleDelete = () => {
    const { deleteTodo } = todoSlice.todoActions
    dispatch(deleteTodo({ id, page: "Detail" }))
  }

  const props = {
    isCompleted,
    content,
    modalType,
    handleCompleteStatus,
    handleOpenEditModal,
    handleDelete,
  }

  return <DetailView {...props} />
}
