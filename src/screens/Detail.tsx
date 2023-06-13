import React, { useState } from "react"
import { StyleSheet, Text, View } from "react-native"
import { DetailScreenRouteProp } from "../shared/types"

import BouncyCheckbox from "react-native-bouncy-checkbox"
import TodoText from "../components/todo/TodoText"
import theme from "../shared/theme"

type DetailProps = {
  route: DetailScreenRouteProp
}

export default function Detail({ route }: DetailProps) {
  const { content } = route.params
  const [isCompleted, setIsCompleted] = useState(false)

  return (
    <View style={styles.container}>
      <View style={styles.centerContent}>
        <TodoText content={content} isCompleted={isCompleted} isDetail={true} />
      </View>
      <View style={styles.bottom}>
        <BouncyCheckbox
          fillColor={theme.primary}
          onPress={() => setIsCompleted(!isCompleted)}
          iconStyle={{
            borderRadius: 0,
          }}
          innerIconStyle={{
            borderRadius: 0,
          }}
        />
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
    justifyContent: "center",
    alignItems: "center",
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
})
