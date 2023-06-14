import React, { useEffect, useState, useCallback } from "react"
import { HomeScreenNavigationProp } from "../../shared/types"

import { useDispatch } from "react-redux"
import { useSelector } from "react-redux"
import * as todoSlice from "../../store/slices/todos"
import * as modalSlice from "../../store/slices/modal"

import HomeView from "./HomeView"

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
  const { todos } = useSelector(todoSlice.todoSelector.all)
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

  const props = {
    handleDisplayMore,
    onRefresh,
    refreshing,
    todos,
    navigation,
    modalType,
  }

  return <HomeView {...props} />
}
