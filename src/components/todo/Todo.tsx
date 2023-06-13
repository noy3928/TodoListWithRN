import React, { useState } from "react"
import { StyleSheet, Text, View, TouchableOpacity } from "react-native"
import { Todo as TodoType, HomeScreenNavigationProp } from "../../shared/types"

import theme from "../../shared/theme"
import BouncyCheckbox from "react-native-bouncy-checkbox"
import TodoText from "./TodoText"
import TodoActions from "./TodoActions"

interface Props {
  item: TodoType
  navigation: HomeScreenNavigationProp
}

export default function Todo({ item, navigation }: Props) {
  const [isCompleted, setIsCompleted] = useState(false)
  const [isEditing, setIsEditing] = useState(false)

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
        style={styles.contentContainer}
      >
        <TodoText
          content={item.content}
          isCompleted={isCompleted}
          isEditing={isEditing}
        />
        {!isCompleted && (
          <TodoActions
            isEditing={isEditing}
            onEditSaveToggle={() => setIsEditing(!isEditing)}
            onEditingCancel={() => setIsEditing(!isEditing)}
            onDelete={() => {
              /* 삭제 */
            }}
          />
        )}
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
    marginBottom: 30,
  },
  contentContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    flex: 1,
    alignItems: "center",
  },
  editSaveButton: {
    flexShrink: 0,
    color: theme.primary,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "flex-end",
  },
  deleteButton: {
    color: theme.primary,
    marginLeft: 10,
  },
})
