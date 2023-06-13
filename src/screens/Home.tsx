import React, { useEffect, useState } from "react"
import { StyleSheet, Text, View, FlatList } from "react-native"

import Task from "../components/Task"
import ControlBottomBar from "../components/ControlBottomBar"
import theme from "../shared/theme"
import axiosInstance from "../services/api"
import { Tasks } from "../shared/types"

export default function Home() {
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
        renderItem={({ item }) => <Task text={item.content} />}
        keyExtractor={item => item.id}
        style={styles.list}
      />
      <ControlBottomBar taskLength={tasks.length} />
        <Text style={styles.text}>{tasks.length} TASKS</Text>
        <Text style={styles.text}>ADD NEW +</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    paddingTop: 50,
  },
  list: {
    flex: 1,
    flexDirection: "column",
    gap: 30,
    width: "100%",
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
