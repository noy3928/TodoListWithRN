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
  const { editInfo } = useSelector(todoSlice.todoSelector.all)
  const [content, setContent] = useState(
    modalType == "EDIT" ? editInfo.content : ""
  )

  useEffect(() => {
    setContent(modalType == "EDIT" ? editInfo.content : "")
  }, [modalType, editInfo])

  const handleCloseModal = () => {
    const { closeModal } = modalSlice.modalActions
    dispatch(closeModal())
  }

  // TODO : 글작성시 로딩 처리 및 에러 처리하기
  const handleAddTodo = async () => {
    if (!content) return
    const { addTodo } = todoSlice.todoActions
    await dispatch(addTodo(content))
    handleCloseModal()
  }

  const handleUpdateTodo = async () => {
    if (!content) return
    const { updateTodo } = todoSlice.todoActions
    await dispatch(
      updateTodo({
        id: editInfo.id,
        content,
      })
    )
    handleCloseModal()
  }

  const onChangeContent = (value: string) => setContent(value)

  const props = {
    handleCloseModal,
    handleAddTodo,
    handleUpdateTodo,
    content,
    onChangeContent,
    modalType,
  }

  return <TodoModalView {...props} />
}
