import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import { Todos, HomeScreenNavigationProp } from "../shared/types"
import { getTodos } from "../services"

import Todo from "../components/Todo"
import ControlBottomBar from "../components/ControlBottomBar"

import theme from "../shared/theme"

type HomeProps = {
  navigation: HomeScreenNavigationProp
}

export default function Home({ navigation }: HomeProps) {
  const [Todos, setTodos] = useState<Todos>([])

  useEffect(() => {
    const fetchTodos = async () => {
      const todos = await getTodos()
      setTodos(todos)
    }
    fetchTodos()
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={Todos}
        renderItem={({ item }) => <Todo item={item} navigation={navigation} />}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <ControlBottomBar TodoLength={Todos.length} />
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
  },
  bottom: {
    width: "100%",
    borderTopColor: theme.primary,
    borderTopWidth: 1,
    height: 100,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 30,
  },
  text: {
    fontSize: 20,
    color: theme.primary,
  },
})
