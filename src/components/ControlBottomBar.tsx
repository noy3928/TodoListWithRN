import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

import theme from "../shared/theme"
import { useHandleOpenModal } from "../services/hooks"

interface Props {
  TodoLength: number
}

export default function ControlBottomBar({ TodoLength }: Props) {
  const handleOpenModal = useHandleOpenModal()

  return (
    <View style={styles.bottom}>
      <Text style={styles.text}>{TodoLength} Todos</Text>
      <TouchableOpacity onPress={() => handleOpenModal("ADD")}>
        <Text style={styles.text}>ADD NEW +</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  bottom: {
    width: "100%",
    borderTopColor: theme.primary,
    borderTopWidth: 1,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 20,
    color: theme.primary,
  },
})
