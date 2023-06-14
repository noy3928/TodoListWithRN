import React from "react"
import { StyleSheet, View, FlatList, RefreshControl, Text } from "react-native"
import { HomeScreenNavigationProp } from "../../shared/types"

import { Todos, ModalType } from "../../shared/types"

import Todo from "../../components/todo/Todo/Todo"
import TodoModal from "../../components/modal/TodoModal/TodoModal"
import ControlBottomBar from "../../components/ControlBottomBar"

type HomeProps = {
  navigation: HomeScreenNavigationProp
  handleDisplayMore: () => void
  onRefresh: () => void
  refreshing: boolean
  todos: Todos
  modalType: ModalType
}

export default function HomeView({
  navigation,
  handleDisplayMore,
  onRefresh,
  refreshing,
  todos,
  modalType,
}: HomeProps) {
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
