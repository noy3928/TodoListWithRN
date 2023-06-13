import React from "react"
import { Text, StyleSheet } from "react-native"
import theme from "../../shared/theme"

interface Props {
  content: string
  isCompleted: boolean
}

export default function TodoText({ content, isCompleted }: Props) {
  return (
    <Text style={isCompleted ? styles.completed : styles.normal}>
      {content}
    </Text>
  )
}

const styles = StyleSheet.create({
  normal: {
    color: theme.primary,
    fontSize: 20,
  },
  completed: {
    color: `rgba(71, 102, 243, 0.5)`,
    fontSize: 20,
    textDecorationLine: "line-through",
  },
})
