import { call, put, takeEvery } from "redux-saga/effects"
import * as API from "../../services"
import { todoActions } from "../slices/todos"
import { modalActions } from "../slices/modal"
import { ActionType, UpdateActionType } from "../../shared/types"
import { ERROR_MESSAGE } from "../../shared/constants"

// TODO : Generator 타입 지정하기
function* handleFetchTodos(): Generator<any, any, any> {
  const { fetchTodoSuccess, fetchTodoFailure } = todoActions
  try {
    const todos = yield call(API.fetchTodos)

    yield put(fetchTodoSuccess(todos))
  } catch (err) {
    yield put(fetchTodoFailure(ERROR_MESSAGE.FETCH_FAILED))
  }
}

function* handleAddTodos(action: ActionType): Generator<any, any, any> {
  const { addTodoSuccess, addTodoFailure } = todoActions
  const { closeModal } = modalActions

  try {
    const todos = yield call(API.addTodo, action.payload)
    yield put(addTodoSuccess(todos))
    yield put(closeModal())
  } catch (err) {
    yield put(addTodoFailure(ERROR_MESSAGE.ADD_FAILED))
  }
}

function* handleUpdateTodos(
  action: UpdateActionType
): Generator<any, any, any> {
  const { updateTodoSuccess, updateTodoFailure } = todoActions
  const { closeModal } = modalActions
  try {
    const todos = yield call(API.updateTodo, action.payload)
    yield put(updateTodoSuccess(todos))
    yield put(closeModal())
  } catch (err) {
    yield put(updateTodoFailure(ERROR_MESSAGE.EDIT_FAILED))
  }
}

function* handleDeleteTodos(action: ActionType): Generator<any, any, any> {
  const { deleteTodoSuccess, deleteTodoFailure } = todoActions
  try {
    const id = action.payload
    yield call(API.deleteTodo, id)
    yield put(deleteTodoSuccess(id))
  } catch (err) {
    yield put(deleteTodoFailure(err))
  }
}

export default function* watchTodos() {
  const { fetchTodos, addTodo, deleteTodo, updateTodo } = todoActions

  yield takeEvery(fetchTodos, handleFetchTodos)
  yield takeEvery(addTodo, handleAddTodos)
  yield takeEvery(updateTodo, handleUpdateTodos)
  yield takeEvery(deleteTodo, handleDeleteTodos)
}
