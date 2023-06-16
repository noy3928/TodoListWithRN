import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { ModalType } from "../../../shared/types"
import { MaterialCommunityIcons } from "@expo/vector-icons"

import BouncyCheckbox from "react-native-bouncy-checkbox"
import TodoText from "../../../components/todo/TodoText"
import TodoModal from "../../../components/modal/TodoModal"

import theme from "../../../shared/theme"

type DetailProps = {
  content: string
  modalType: ModalType
  isCompleted: boolean | undefined
  handleCompleteStatus: () => void
  handleOpenEditModal: () => void
  handleDelete: () => void
}

export default function DetailView({
  content,
  modalType,
  isCompleted,
  handleCompleteStatus,
  handleOpenEditModal,
  handleDelete,
}: DetailProps) {
  return (
    <View style={styles.container}>
      <TodoModal modalType={modalType} />
      <View style={styles.centerContent}>
        <BouncyCheckbox
          isChecked={isCompleted}
          fillColor={theme.primary}
          onPress={handleCompleteStatus}
          iconStyle={{
            borderRadius: 0,
          }}
          innerIconStyle={{
            borderRadius: 0,
          }}
        />
        <TodoText content={content} isCompleted={isCompleted} isDetail={true} />
      </View>
      <View style={styles.bottom}>
        <TouchableOpacity onPress={handleOpenEditModal} disabled={isCompleted}>
          <MaterialCommunityIcons
            name="pencil-outline"
            size={30}
            color={theme.primary}
            style={isCompleted ? styles.textDisabled : styles.text}
          />
        </TouchableOpacity>
        <TouchableOpacity onPress={handleDelete} disabled={isCompleted}>
          <MaterialCommunityIcons
            name="delete-outline"
            size={30}
            color={theme.primary}
            style={isCompleted ? styles.textDisabled : styles.text}
          />
        </TouchableOpacity>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  centerContent: {
    flex: 1,
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 30,
    color: theme.primary,
  },
  bottom: {
    width: "100%",
    height: 100,
    borderTopColor: theme.primary,
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "row",
    gap: 30,
  },
  textDisabled: {
    fontSize: 30,
    color: theme.primaryLight,
    textDecorationLine: "line-through",
  },
})
