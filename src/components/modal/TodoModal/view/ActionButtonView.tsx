import React from "react"
import { StyleSheet, Text, Pressable, ActivityIndicator } from "react-native"
import theme from "../../../../shared/theme"

import { ModalType } from "../../../../shared/types"

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
      <Pressable
        style={styles.button}
        onPress={handleAddTodo}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.textStyle}>추가하기</Text>
        )}
      </Pressable>
    )
  }

  if (modalType === "EDIT") {
    return (
      <Pressable
        style={styles.button}
        onPress={handleEditTodo}
        disabled={isLoading}
      >
        {isLoading ? (
          <ActivityIndicator />
        ) : (
          <Text style={styles.textStyle}>수정하기</Text>
        )}
      </Pressable>
    )
  }

  return null
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  textStyle: {
    color: theme.primary,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
})
