import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

import { ModalType } from "../../../shared/types"
import * as todoSlice from "../../../store/slices/todos"
import * as modalSlice from "../../../store/slices/modal"

import TodoModalView from "./view/TodoModalView"
import { ERROR_MESSAGE } from "../../../shared/constants"

interface Props {
  modalType: ModalType
}

export default function TodoModal({ modalType }: Props) {
  const dispatch = useDispatch()
  const { editInfo, isLoading, error } = useSelector(todoSlice.todoSelector.all)
  const [content, setContent] = useState(
    modalType == "EDIT" ? editInfo.content : ""
  )
  const { addTodo, updateTodo, setError, resetError } = todoSlice.todoActions
  const { closeModal } = modalSlice.modalActions

  useEffect(() => {
    setContent(modalType == "EDIT" ? editInfo.content : "")
  }, [modalType, editInfo])

  const handleCloseModal = () => {
    if (error) dispatch(resetError())
    dispatch(closeModal())
  }

  const handleAddTodo = () => {
    if (!content) return dispatch(setError(ERROR_MESSAGE.EMPTY_INPUT))

    dispatch(addTodo(content))
  }

  const handleUpdateTodo = () => {
    if (!content) return dispatch(setError(ERROR_MESSAGE.EMPTY_INPUT))

    if (error) dispatch(resetError())
    dispatch(
      updateTodo({
        id: editInfo.id,
        content,
      })
    )
  }

  const onChangeContent = (value: string) => {
    if (error) dispatch(resetError())
    setContent(value)
  }

  const props = {
    content,
    modalType,
    isLoading,
    error,
    handleCloseModal,
    handleAddTodo,
    handleUpdateTodo,
    onChangeContent,
  }

  return <TodoModalView {...props} />
}
