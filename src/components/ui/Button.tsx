import React from "react"
import { StyleSheet, Text, Pressable, ActivityIndicator } from "react-native"

import theme from "../../shared/theme"

interface Props {
  isLoading?: boolean
  text: string
  onPress: () => void
}

export default function Button({ isLoading, text, onPress }: Props) {
  return (
    <Pressable style={styles.button} onPress={onPress} disabled={isLoading}>
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <Text style={styles.textStyle}>{text}</Text>
      )}
    </Pressable>
  )
}

const styles = StyleSheet.create({
  button: {
    padding: 10,
  },
  textStyle: {
    color: theme.primary,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
})
