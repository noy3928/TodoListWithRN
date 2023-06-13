import React from "react"
import {
  StyleSheet,
  Text,
  View,
  Modal,
  Pressable,
  TextInput,
} from "react-native"
import theme from "../../shared/theme"

interface Props {
  modalVisible: boolean
  setModalVisible: (modalVisible: boolean) => void
}

export default function UpdateModal({ modalVisible, setModalVisible }: Props) {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={modalVisible}
      onRequestClose={() => {
        setModalVisible(!modalVisible)
      }}
    >
      <View style={styles.centeredView}>
        <View style={styles.modalView}>
          <TextInput style={styles.textInput} />
          <View style={styles.buttonsView}>
            <Pressable
              style={styles.button}
              onPress={() => setModalVisible(!modalVisible)}
            >
              <Text style={styles.textStyle}>취소</Text>
            </Pressable>
            <Pressable style={styles.button}>
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
    marginTop: 22,
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
    borderRadius: 20,
    padding: 10,
    elevation: 2,
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
    borderRadius: 5,
  },
})
