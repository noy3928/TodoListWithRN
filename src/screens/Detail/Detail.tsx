import React, { useState } from "react"
import { DetailScreenRouteProp } from "../../shared/types"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import * as modalSlice from "../../store/slices/modal"
import * as todoSlice from "../../store/slices/todos"

import DetailView from "./DetailView"

import { useHandleOpenModal } from "../../services/hooks/useHandleOpenModal"

type DetailProps = {
  route: DetailScreenRouteProp
}

export default function Detail({ route }: DetailProps) {
  const dispatch = useDispatch()
  const { content, id, isCompleted: initCompleteStatus } = route.params
  const [isCompleted, setIsCompleted] = useState(initCompleteStatus)
  const { modalType } = useSelector(modalSlice.modalSelector.all)
  const handleOpenModal = useHandleOpenModal()

  const handleCompleteStatus = () => {
    const { updateCompleteStatus } = todoSlice.todoActions
    setIsCompleted(!isCompleted)
    dispatch(updateCompleteStatus(id))
  }

  const handleOpenEditModal = () => {
    handleOpenModal("EDIT", { content, id })
  }

  const props = {
    handleCompleteStatus,
    isCompleted,
    content,
    modalType,
    handleOpenEditModal,
  }

  return <DetailView {...props} />
}
