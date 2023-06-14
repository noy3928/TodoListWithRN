import { call, put, takeEvery } from "redux-saga/effects"
import * as API from "../../services"
import { todoActions } from "../slices/todos"
import { ActionType } from "../../shared/types"

// TODO : Generator 타입 지정하기
function* handleFetchTodos(): Generator<any, any, any> {
  const { fetchTodoSuccess, fetchTodoFailure } = todoActions
  try {
    const todos = yield call(API.fetchTodos)

    yield put(fetchTodoSuccess(todos))
  } catch (err) {
    yield put(fetchTodoFailure(err))
  }
}

function* handleAddTodos(action: ActionType): Generator<any, any, any> {
  const { addTodoSuccess, addTodoFailure } = todoActions
  try {
    const todos = yield call(API.addTodo, action.payload)
    yield put(addTodoSuccess(todos))
  } catch (err) {
    yield put(addTodoFailure(err))
  }
}

function* handleDeleteTodos(action: ActionType): Generator<any, any, any> {
  const { deleteTodoSuccess, deleteTodoFailure } = todoActions
  try {
    const todos = yield call(API.deleteTodo, action.payload)
    yield put(deleteTodoSuccess(todos))
  } catch (err) {
    yield put(deleteTodoFailure(err))
  }
}

export default function* watchTodos() {
  const { fetchTodos, addTodo, deleteTodo } = todoActions

  yield takeEvery(fetchTodos, handleFetchTodos)
  yield takeEvery(addTodo, handleAddTodos)
  yield takeEvery(deleteTodo, handleDeleteTodos)
}
