import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Task as TaskType, HomeScreenNavigationProp } from "../shared/types"

import BouncyCheckbox from "react-native-bouncy-checkbox"
import theme from "../shared/theme"

interface Props {
  item: TaskType
  navigation: HomeScreenNavigationProp
}

export default function Task({ item, navigation }: Props) {
  return (
    <View style={styles.container}>
      <BouncyCheckbox
        fillColor={theme.primary}
        onPress={(isChecked: boolean) => {}}
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
        <Text style={styles.text}>{item.content}</Text>
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
