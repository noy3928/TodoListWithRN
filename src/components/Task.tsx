import React from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"

import BouncyCheckbox from "react-native-bouncy-checkbox"
import theme from "../shared/theme"

interface Props {
  text: string
}

export default function Task({ text }: Props) {
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
      <TouchableOpacity>
        <Text style={styles.text}>{text}</Text>
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
  },
  text: {
    color: theme.primary,
    fontSize: 20,
  },
})
