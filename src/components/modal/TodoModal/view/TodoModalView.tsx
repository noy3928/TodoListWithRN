import React, { useState, useEffect } from "react"
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
} from "react-native"
import theme from "../../../../shared/theme"

import { ModalType } from "../../../../shared/types"

import ActionButtonView from "./ActionButtonView"

interface Props {
  modalType: ModalType
  handleCloseModal: () => void
  handleAddTodo: () => void
  handleUpdateTodo: () => void
  content: string
  onChangeContent: (value: string) => void
  isLoading: boolean
}

export default function TodoModalView({
  modalType,
  content,
  onChangeContent,
  handleCloseModal,
  handleAddTodo,
  handleUpdateTodo,
  isLoading,
}: Props) {
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
            onChangeText={onChangeContent}
            value={content}
            multiline={true}
            numberOfLines={5}
          />
          <View style={styles.buttonsView}>
            <Pressable style={styles.button} onPress={handleCloseModal}>
              <Text style={styles.textStyle}>취소</Text>
            </Pressable>
            <ActionButtonView
              modalType={modalType}
              handleAddTodo={handleAddTodo}
              handleEditTodo={handleUpdateTodo}
              isLoading={isLoading}
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
