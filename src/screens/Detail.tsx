import React from "react"
import { StatusBar } from "expo-status-bar"
import { StyleSheet, Text, View } from "react-native"
import { DetailScreenRouteProp } from "../shared/types"

type DetailProps = {
  route: DetailScreenRouteProp
}

export default function Detail({ route }: DetailProps) {
  const { content } = route.params

  return (
    <View style={styles.container}>
      <Text>{content}</Text>
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
})
