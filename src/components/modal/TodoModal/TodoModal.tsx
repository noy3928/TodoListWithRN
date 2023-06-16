import React, { useState, useEffect } from "react"
import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

import { ModalType } from "../../../shared/types"
import * as todoSlice from "../../../store/slices/todos"
import * as modalSlice from "../../../store/slices/modal"

import TodoModalView from "./view/TodoModalView"

interface Props {
  modalType: ModalType
}

export default function TodoModal({ modalType }: Props) {
  const dispatch = useDispatch()
  const { editInfo, isLoading, error } = useSelector(todoSlice.todoSelector.all)
  const [content, setContent] = useState(
    modalType == "EDIT" ? editInfo.content : ""
  )
  const { addTodo, updateTodo, resetError } = todoSlice.todoActions
  const { closeModal } = modalSlice.modalActions

  useEffect(() => {
    setContent(modalType == "EDIT" ? editInfo.content : "")
  }, [modalType, editInfo])

  const handleCloseModal = () => {
    if (error) dispatch(resetError())
    dispatch(closeModal())
  }

  // TODO : 글작성시 로딩 처리 및 에러 처리하기
  const handleAddTodo = () => {
    if (!content) return

    dispatch(addTodo(content))
  }

  const handleUpdateTodo = () => {
    if (!content) return
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
    handleCloseModal,
    handleAddTodo,
    handleUpdateTodo,
    content,
    onChangeContent,
    modalType,
    isLoading,
    error,
  }

  return <TodoModalView {...props} />
}
