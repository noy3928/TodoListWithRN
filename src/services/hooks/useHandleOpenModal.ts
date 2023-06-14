import { useDispatch } from "react-redux"
import * as modalSlice from "../../store/slices/modal"
import * as todoSlice from "../../store/slices/todos"
import { ModalType, Todo } from "../../shared/types"

export const useHandleOpenModal = () => {
  const dispatch = useDispatch()

  const handelOpenModal = (modalType: ModalType, editInfo?: Todo) => {
    const { openModal } = modalSlice.modalActions
    const { getEditInfo } = todoSlice.todoActions

    if (modalType == "EDIT") dispatch(getEditInfo(editInfo))

    dispatch(openModal(modalType))
  }

  return handelOpenModal
}
