import React, { useState, useEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
} from "react-native"
import theme from "../../shared/theme"

import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"

import { ModalType } from "../../shared/types"
import * as todoSlice from "../../store/slices/todos"
import * as modalSlice from "../../store/slices/modal"

import ActionButton from "./ActionButton"

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

  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={!!modalType}
      onRequestClose={handleCloseModal}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.textInput}
            onChangeText={(value: string) => setContent(value)}
            value={content}
            multiline={true}
            numberOfLines={5}
          />
          <View style={styles.buttonsView}>
            <Pressable style={styles.button} onPress={handleCloseModal}>
              <Text style={styles.textStyle}>취소</Text>
            </Pressable>
            <ActionButton
              modalType={modalType}
              handleAddTodo={handleAddTodo}
              handleEditTodo={handleUpdateTodo}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    paddingBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
  },
  buttonsView: {
    flexDirection: "row",
  },
  textStyle: {
    color: theme.primary,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    textAlign: "center",
  },
  textInput: {
    width: 200,
    fontSize: 20,
    marginBottom: 10,
    padding: 10,
    borderColor: theme.primary,
    borderWidth: 1,
    maxHeight: 200,
  },
})
