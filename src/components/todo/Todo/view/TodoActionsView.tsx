import React from "react"
import { View, Text, TouchableOpacity, StyleSheet } from "react-native"
import theme from "../../../../shared/theme"
import { MaterialCommunityIcons } from "@expo/vector-icons"
import { Todo } from "../../../../shared/types"

interface Props {
  item: Todo
  onDelete: () => void
  handleOpenEditModal: () => void
}

const TodoActions = ({ onDelete, handleOpenEditModal, item }: Props) => {
  return (
    <View style={styles.buttonContainer}>
      <>
        {!item.isCompleted && (
          <TouchableOpacity onPress={handleOpenEditModal}>
            <MaterialCommunityIcons
              name="pencil-outline"
              size={24}
              color={theme.primary}
              style={styles.editButton}
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity onPress={onDelete}>
          <MaterialCommunityIcons
            name="delete-outline"
            size={24}
            color={theme.primary}
            style={styles.deleteButton}
          />
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
  editButton: {
    flexShrink: 0,
    marginLeft: 10,
  },
  deleteButton: {
    color: theme.primary,
    marginLeft: 10,
  },
})

export default TodoActions
