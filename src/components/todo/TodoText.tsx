import React from "react"
import { Text, StyleSheet, TextInput } from "react-native"
import theme from "../../shared/theme"

interface Props {
  content: string
  isCompleted: boolean
  isEditing?: boolean
}

export default function TodoText({
  content,
  isCompleted,
  isEditing = false,
}: Props) {
  if (isEditing) {
    return (
      <TextInput
        style={styles.input}
        defaultValue={content}
        multiline
        numberOfLines={5}
      />
    )
  }

  return (
    <Text
      style={isCompleted ? styles.completed : styles.normal}
      numberOfLines={5}
      ellipsizeMode="tail"
    >
      {content}
    </Text>
  )
}

const styles = StyleSheet.create({
  normal: {
    color: theme.primary,
    fontSize: 20,
    padding: 5,
    borderWidth: 1,
    borderColor: "transparent",
    maxWidth: "80%",
  },
  completed: {
    color: theme.primaryLight,
    fontSize: 20,
    textDecorationLine: "line-through",
    padding: 5,
    borderWidth: 1,
    borderColor: "transparent",
    maxWidth: "80%",
  },
  input: {
    color: theme.primary,
    fontSize: 20,
    borderColor: theme.primary,
    borderWidth: 1,
    padding: 5,
  },
})
