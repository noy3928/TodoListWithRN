import { call, put, takeEvery } from "redux-saga/effects"
import * as API from "../../services"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { navigateTo } from "../../services/navigation/navigateUtils"

import { todoActions } from "../slices/todos"
import { modalActions } from "../slices/modal"
import {
  ActionType,
  DeleteActionType,
  UpdateActionType,
} from "../../shared/types"

// TODO : Generator 타입 지정하기
export function* handleFetchTodos(): Generator<any, any, any> {
  const { fetchTodoSuccess, fetchTodoFailure } = todoActions
  try {
    const todos = yield call(API.fetchTodos)
    const storedStatuses = yield call(
      AsyncStorage.getItem,
      "completionStatuses"
    )

    if (storedStatuses == null && storedStatuses == undefined) {
      const completionStatuses: { [key: string]: boolean } = {}
      for (const todo of todos) {
        completionStatuses[todo.id] = false
      }
      yield call(
        AsyncStorage.setItem,
        "completionStatuses",
        JSON.stringify(completionStatuses)
      )
      yield put(fetchTodoSuccess({ todos, completionStatuses }))
    } else {
      yield put(
        fetchTodoSuccess({
          todos,
          completionStatuses: JSON.parse(storedStatuses),
        })
      )
    }
  } catch (err) {
    yield put(fetchTodoFailure(err))
  }
}

export function* handleAddTodos(action: ActionType): Generator<any, any, any> {
  const { addTodoSuccess, addTodoFailure } = todoActions
  const { closeModal } = modalActions

  try {
    const todos = yield call(API.addTodo, action.payload)
    yield put(addTodoSuccess(todos))
    yield put(closeModal())
  } catch (err) {
    yield put(addTodoFailure(err))
  }
}

export function* handleUpdateTodos(
  action: UpdateActionType
): Generator<any, any, any> {
  const { updateTodoSuccess, updateTodoFailure } = todoActions
  const { closeModal } = modalActions
  try {
    const todos = yield call(API.updateTodo, action.payload)
    yield put(updateTodoSuccess(todos))
    yield put(closeModal())
  } catch (err) {
    yield put(updateTodoFailure(err))
  }
}

export function* handleDeleteTodos(
  action: DeleteActionType
): Generator<any, any, any> {
  const { deleteTodoSuccess, deleteTodoFailure } = todoActions
  try {
    const { id, page } = action.payload
    yield call(API.deleteTodo, id)
    yield put(deleteTodoSuccess(id))
    if (page == "Detail") navigateTo("Home")
  } catch (err) {
    yield put(deleteTodoFailure(err))
  }
}

export function* handleUpdateCompletionStatus(
  action: ActionType
): Generator<any, any, any> {
  const { updateCompletionStatusSuccess, updateCompletionStatusFailure } =
    todoActions
  const id = action.payload
  try {
    const storedStatuses = yield call(
      AsyncStorage.getItem,
      "completionStatuses"
    )
    const completionStatuses = JSON.parse(storedStatuses) || {}
    completionStatuses[id] = !completionStatuses[id]
    yield call(
      AsyncStorage.setItem,
      "completionStatuses",
      JSON.stringify(completionStatuses)
    )

    yield put(updateCompletionStatusSuccess(id))
  } catch (err) {
    yield put(updateCompletionStatusFailure(err))
  }
}

export default function* watchTodos() {
  const {
    fetchTodos,
    addTodo,
    deleteTodo,
    updateTodo,
    updateCompletionStatus,
  } = todoActions

  yield takeEvery(fetchTodos, handleFetchTodos)
  yield takeEvery(addTodo, handleAddTodos)
  yield takeEvery(updateTodo, handleUpdateTodos)
  yield takeEvery(deleteTodo, handleDeleteTodos)
  yield takeEvery(updateCompletionStatus, handleUpdateCompletionStatus)
}
