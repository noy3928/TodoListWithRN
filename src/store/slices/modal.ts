import { createSlice, createSelector } from "@reduxjs/toolkit"
import { RootState } from "../index"
import { ModalType } from "../../shared/types"

const initialState: { modalType: ModalType } = {
  modalType: undefined,
}

export const slice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    closeModal: state => {
      state.modalType = undefined
    },
    openModal: (state, { payload: modalType }) => {
      state.modalType = modalType
    },
  },
})

const selectAllState = createSelector(
  (state: RootState) => state.modal.modalType,
  modalType => {
    return { modalType }
  }
)

export const modalSelector = {
  all: (state: RootState) => selectAllState(state),
}

export const modalActions = slice.actions
export default slice.reducer
