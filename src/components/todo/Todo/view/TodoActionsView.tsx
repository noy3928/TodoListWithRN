import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import theme from "../../../../shared/theme"

interface Props {
  onDelete: () => void
  handleOpenEditModal: () => void
}

const TodoActions = ({ onDelete, handleOpenEditModal }: Props) => {
  return (
    <View style={styles.buttonContainer}>
      <>
        <TouchableOpacity onPress={handleOpenEditModal}>
          <Text style={styles.editSaveButton}>수정</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={onDelete}>
          <Text style={styles.deleteButton}>삭제</Text>
        </TouchableOpacity>
      </>
    </View>
  )
}

const styles = StyleSheet.create({
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  editSaveButton: {
    flexShrink: 0,
    color: theme.primary,
    marginLeft: 10,
  },
  deleteButton: {
    color: theme.primary,
    marginLeft: 10,
  },
})

export default TodoActions
