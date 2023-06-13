import React, { useState } from "react"
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
  TextInputChangeEventData,
} from "react-native"
import theme from "../../shared/theme"
import { addTodo } from "../../services"

interface Props {
  modalVisible: boolean
  setModalVisible: (modalVisible: boolean) => void
}

export default function UpdateModal({ modalVisible, setModalVisible }: Props) {
  const [content, setContent] = useState("")
  const handleAddTodo = async () => {
    if (!content) return
    await addTodo(content)
    setModalVisible(!modalVisible)
  }
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput
            style={styles.textInput}
            onChangeText={(value: string) => setContent(value)}
          />
          <View style={styles.buttonsView}>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>취소</Text>
            </Pressable>
            <Pressable style={styles.button} onPress={handleAddTodo}>
              <Text style={styles.textStyle}>추가하기</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </Modal>
  )
}

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    paddingBottom: 10,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    padding: 10,
  },
  buttonsView: {
    flexDirection: "row",
  },
  textStyle: {
    color: theme.primary,
    fontWeight: "bold",
    textAlign: "center",
    fontSize: 20,
  },
  modalText: {
    textAlign: "center",
  },
  textInput: {
    width: 200,
    fontSize: 20,
    marginBottom: 10,
    padding: 10,
    borderColor: theme.primary,
    borderWidth: 1,
  },
})
