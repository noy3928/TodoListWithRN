import React, { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Todo as TodoType, HomeScreenNavigationProp } from "../../shared/types"

import { useDispatch } from "react-redux"
import * as todoSlice from "../../store/slices/todos"

import theme from "../../shared/theme"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import TodoText from "./TodoText"
import TodoActions from "./TodoActions"

interface Props {
  item: TodoType
  navigation: HomeScreenNavigationProp
}

export default function Todo({ item, navigation }: Props) {
  const dispatch = useDispatch()

  const handleDelete = () => {
    const { deleteTodo } = todoSlice.todoActions
    dispatch(deleteTodo(item.id))
  }

  const handleCompletedStatus = () => {
    const { updateCompleteStatus } = todoSlice.todoActions
    dispatch(updateCompleteStatus(item.id))
  }

  return (
    <View style={styles.container}>
      <BouncyCheckbox
        key={item.isCompleted?.toString()}
        isChecked={item.isCompleted}
        fillColor={theme.primary}
        onPress={handleCompletedStatus}
        iconStyle={{
          borderRadius: 0,
        }}
        innerIconStyle={{
          borderRadius: 0,
        }}
      />
      <View style={styles.contentContainer}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate("Detail", {
              content: item.content,
              id: item.id,
              isCompleted: item.isCompleted,
            })
          }
          style={styles.textContainer}
        >
          <TodoText content={item.content} isCompleted={item.isCompleted} />
        </TouchableOpacity>
        {!item.isCompleted && (
          <TodoActions item={item} onDelete={handleDelete} />
        )}
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
    marginBottom: 30,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  textContainer: {
    flex: 1,
    maxWidth: "80%",
  },
  editSaveButton: {
    flexShrink: 0,
    color: theme.primary,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  deleteButton: {
    color: theme.primary,
    marginLeft: 10,
  },
})
