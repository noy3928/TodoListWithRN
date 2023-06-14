import React, { useState } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { DetailScreenRouteProp } from "../shared/types"
import { useSelector } from "react-redux"
import { useDispatch } from "react-redux"
import * as modalSlice from "../store/slices/modal"
import * as todoSlice from "../store/slices/todos"

import BouncyCheckbox from "react-native-bouncy-checkbox"
import TodoText from "../components/todo/TodoText"
import TodoModal from "../components/modal/TodoModal/TodoModal"

import theme from "../shared/theme"
import { useHandleOpenModal } from "../services/hooks/useHandleOpenModal"

type DetailProps = {
  route: DetailScreenRouteProp
}

export default function Detail({ route }: DetailProps) {
  const dispatch = useDispatch()
  const { content, id, isCompleted: initCompleteStatus } = route.params
  const [isCompleted, setIsCompleted] = useState(initCompleteStatus)
  const { modalType } = useSelector(modalSlice.modalSelector.all)
  const handleOpenModal = useHandleOpenModal()

  const handleCompleteStatus = () => {
    const { updateCompleteStatus } = todoSlice.todoActions
    setIsCompleted(!isCompleted)
    dispatch(updateCompleteStatus(id))
  }

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
      <TouchableOpacity
        style={styles.bottom}
        onPress={() => handleOpenModal("EDIT", { content, id })}
        disabled={isCompleted}
      >
        <Text style={isCompleted ? styles.textDisabled : styles.text}>
          수정하기
        </Text>
      </TouchableOpacity>
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
    fontSize: 20,
    color: theme.primary,
  },
  bottom: {
    width: "100%",
    height: 100,
    borderTopColor: theme.primary,
    borderTopWidth: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textDisabled: {
    fontSize: 20,
    color: theme.primaryLight,
    textDecorationLine: "line-through",
  },
})
