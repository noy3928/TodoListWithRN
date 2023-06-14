import React, { useEffect, useState, useCallback } from "react"
import { StyleSheet, View, FlatList, RefreshControl, Text } from "react-native"
import { HomeScreenNavigationProp } from "../shared/types"

import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import * as todoSlice from "../store/slices/todos"
import * as modalSlice from "../store/slices/modal"

import Todo from "../components/todo/Todo"
import TodoModal from "../components/modal/TodoModal"
import ControlBottomBar from "../components/ControlBottomBar"

type HomeProps = {
  navigation: HomeScreenNavigationProp
}

const wait = (timeout: number) => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout)
  })
}

export default function Home({ navigation }: HomeProps) {
  const dispatch = useDispatch()
  const { todos, isLoading, error } = useSelector(todoSlice.todoSelector.all)
  const { modalType } = useSelector(modalSlice.modalSelector.all)
  const [refreshing, setRefreshing] = useState(false)

  const fetchData = useCallback(() => {
    const { fetchTodos } = todoSlice.todoActions
    dispatch(fetchTodos())
  }, [dispatch])

  useEffect(() => {
    fetchData()
  }, [])

  const handleDisplayMore = () => {
    const { increaseDisplayCount } = todoSlice.todoActions
    dispatch(increaseDisplayCount())
  }

  const onRefresh = useCallback(() => {
    setRefreshing(true)
    const { resetDisplayCount } = todoSlice.todoActions
    dispatch(resetDisplayCount())
    fetchData()
    wait(2000).then(() => setRefreshing(false))
  }, [])

  return (
    <View style={styles.container}>
      <TodoModal modalType={modalType} />
      <FlatList
        data={todos}
        renderItem={({ item }) => <Todo item={item} navigation={navigation} />}
        keyExtractor={item => item.id}
        style={styles.list}
        onEndReached={handleDisplayMore}
        onEndReachedThreshold={0.1}
        refreshControl={
          <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
        }
        ListFooterComponent={<View style={{ height: 100 }} />}
      />
      <ControlBottomBar TodoLength={todos.length} />
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
