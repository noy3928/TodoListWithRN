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
import Button from "../../../ui/Button"

interface Props {
  content: string
  modalType: ModalType
  error: string | null
  isLoading: boolean
  onChangeContent: (value: string) => void
  handleUpdateTodo: () => void
  handleAddTodo: () => void
  handleCloseModal: () => void
}

export default function TodoModalView({
  content,
  modalType,
  error,
  isLoading,
  onChangeContent,
  handleUpdateTodo,
  handleAddTodo,
  handleCloseModal,
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
          {error && <Text style={styles.errorText}>{error}</Text>}
          <TextInput
            style={styles.textInput}
            onChangeText={onChangeContent}
            value={content}
            multiline={true}
            numberOfLines={5}
          />
          <View style={styles.buttonsView}>
            <Button onPress={handleCloseModal} text="취소" />
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
  errorText: {
    color: "red",
    fontSize: 16,
    marginBottom: 10,
    textAlign: "center",
  },
})
