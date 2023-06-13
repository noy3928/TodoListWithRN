import React, { useEffect, useState } from "react"
import { StyleSheet, View, FlatList } from "react-native"
import { Todos, HomeScreenNavigationProp } from "../shared/types"
import { getTodos } from "../services"

import Todo from "../components/todo/Todo"
import UpdateModal from "../components/modal/UpdateModal"
import ControlBottomBar from "../components/ControlBottomBar"

type HomeProps = {
  navigation: HomeScreenNavigationProp
}

export default function Home({ navigation }: HomeProps) {
  const [Todos, setTodos] = useState<Todos>([])
  const [modalVisible, setModalVisible] = useState(false)

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos()
      setTodos(todos)
    }
    fetchTodos()
  }, [])

  return (
    <View style={styles.container}>
      <UpdateModal
        setModalVisible={setModalVisible}
        modalVisible={modalVisible}
      />
      <FlatList
        data={Todos}
        renderItem={({ item }) => <Todo item={item} navigation={navigation} />}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <ControlBottomBar
        TodoLength={Todos.length}
        setModalVisible={setModalVisible}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
  },
  list: {
    flex: 1,
    flexDirection: "column",
    gap: 30,
    width: "100%",
    paddingTop: 30,
    paddingBottom: 30,
  },
})
