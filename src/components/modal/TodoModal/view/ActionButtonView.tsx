import React from "react"

import { ModalType } from "../../../../shared/types"
import Button from "../../../ui/Button"

interface Props {
  isLoading: boolean
  modalType: ModalType
  handleAddTodo: () => void
  handleEditTodo: () => void
}

export default function ActionButtonView({
  isLoading,
  modalType,
  handleAddTodo,
  handleEditTodo,
}: Props) {
  if (modalType === "ADD") {
    return (
      <Button onPress={handleAddTodo} text="추가하기" isLoading={isLoading} />
    )
  }

  if (modalType === "EDIT") {
    return (
      <Button onPress={handleEditTodo} text="수정하기" isLoading={isLoading} />
    )
  }

  return null
}
