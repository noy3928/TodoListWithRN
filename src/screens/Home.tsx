import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"
import { Tasks, HomeScreenNavigationProp } from "../shared/types"

import Task from "../components/Task"
import ControlBottomBar from "../components/ControlBottomBar"

import theme from "../shared/theme"
import axiosInstance from "../services/api"

type HomeProps = {
  navigation: HomeScreenNavigationProp
}

export default function Home({ navigation }: HomeProps) {
  const [tasks, setTasks] = useState<Tasks>([])

  useEffect(() => {
    axiosInstance.get("/todo").then(({ data }) => {
      setTasks(data)
    })
  }, [])

  return (
    <View style={styles.container}>
      <FlatList
        data={tasks}
        renderItem={({ item }) => <Task item={item} navigation={navigation} />}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <ControlBottomBar taskLength={tasks.length} />
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
