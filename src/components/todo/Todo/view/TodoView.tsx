import React from "react"
import { StyleSheet, View, TouchableOpacity } from "react-native"
import { Todo as TodoType } from "../../../../shared/types"

import theme from "../../../../shared/theme"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import TodoText from "../../TodoText"
import TodoActionsView from "./TodoActionsView"

interface Props {
  item: TodoType
  handleDelete: () => void
  handleCompletionStatus: () => void
  checkboxKey: string | undefined
  isChecked: boolean | undefined
  navigateDetail: () => void
  handleOpenEditModal: () => void
}

export default function Todo({
  item,
  handleDelete,
  handleCompletionStatus,
  checkboxKey,
  isChecked,
  navigateDetail,
  handleOpenEditModal,
}: Props) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        key={checkboxKey}
        isChecked={isChecked}
        fillColor={theme.primary}
        onPress={handleCompletionStatus}
        iconStyle={{
          borderRadius: 0,
        }}
        innerIconStyle={{
          borderRadius: 0,
        }}
      />
      <View style={styles.contentContainer}>
        <TouchableOpacity onPress={navigateDetail} style={styles.textContainer}>
          <TodoText content={item.content} isCompleted={item.isCompleted} />
        </TouchableOpacity>
        {!item.isCompleted && (
          <TodoActionsView
            onDelete={handleDelete}
            handleOpenEditModal={handleOpenEditModal}
          />
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
