import { call, put, takeEvery } from "redux-saga/effects"
import * as api from "../../services"
import { todoActions } from "../slices/todos"

// TODO : Generator 타입 지정하기

function* handleFetchTodos(): Generator<any, any, any> {
  const { fetchTodoSuccess, fetchTodoFailure } = todoActions
  try {
    const todos = yield call(api.fetchTodos)

    yield put(fetchTodoSuccess(todos))
  } catch (err) {
    yield put(fetchTodoFailure(err))
  }
}

export default function* watchTodos() {
  const { fetchTodos } = todoActions

  yield takeEvery(fetchTodos, handleFetchTodos)
}
