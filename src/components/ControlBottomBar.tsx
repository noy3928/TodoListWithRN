import React from "react"
import { StyleSheet, Text, View } from "react-native"

import theme from "../shared/theme"

interface Props {
  taskLength: number
}

export default function ControlBottomBar({ taskLength }: Props) {
  return (
    <View style={styles.bottom}>
      <Text style={styles.text}>{taskLength} TASKS</Text>
      <Text style={styles.text}>ADD NEW +</Text>
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
