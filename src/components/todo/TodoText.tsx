import React from "react"
import {
  Text,
  StyleSheet,
  TextInput,
  KeyboardAvoidingView,
  Platform,
} from "react-native"
import theme from "../../shared/theme"

interface Props {
  content: string
  isCompleted: boolean
  isDetail?: boolean
}

export default function TodoText({
  content,
  isCompleted,
  isDetail = false,
}: Props) {
  return (
    <Text
      style={isCompleted ? styles.completed : styles.normal}
      numberOfLines={isDetail ? undefined : 5}
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
  },
  completed: {
    color: theme.primaryLight,
    fontSize: 20,
    textDecorationLine: "line-through",
    padding: 5,
    borderWidth: 1,
    borderColor: "transparent",
  },
  input: {
    color: theme.primary,
    fontSize: 20,
    borderColor: theme.primary,
    borderWidth: 1,
    padding: 5,
  },
})
