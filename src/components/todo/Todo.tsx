import React, { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Todo as TodoType, HomeScreenNavigationProp } from "../../shared/types"

import theme from "../../shared/theme"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import TodoText from "./TodoText"

interface Props {
  item: TodoType
  navigation: HomeScreenNavigationProp
}

export default function Todo({ item, navigation }: Props) {
  const [isCompleted, setIsCompleted] = useState(false)
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        fillColor={theme.primary}
        onPress={() => {
          setIsCompleted(!isCompleted)
        }}
        iconStyle={{
          borderRadius: 0,
        }}
        innerIconStyle={{
          borderRadius: 0,
        }}
      />
      <TouchableOpacity
        onPress={() =>
          navigation.navigate("Detail", { content: item.content, id: item.id })
        }
      >
        <TodoText content={item.content} isCompleted={isCompleted} />
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    width: "100%",
    backgroundColor: "#fff",
    justifyContent: "flex-start",
    alignItems: "center",
    paddingHorizontal: 30,
    paddingBottom: 30,
  },
  text: {
    color: theme.primary,
    fontSize: 20,
  },
})
