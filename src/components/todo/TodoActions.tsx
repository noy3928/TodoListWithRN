import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import theme from "../../shared/theme"
import { useHandleOpenModal } from "../../services/hooks"
import { Todo } from "../../shared/types"

interface Props {
  item: Todo
  onDelete: () => void
}

const TodoActions = ({ item, onDelete }: Props) => {
  const handleOpenModal = useHandleOpenModal()
  return (
    <View style={styles.buttonContainer}>
      <>
        <TouchableOpacity
          onPress={() =>
            handleOpenModal("EDIT", { content: item.content, id: item.id })
          }
        >
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
