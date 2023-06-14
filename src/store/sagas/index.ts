import { all, fork } from "redux-saga/effects"
import watchTodos from "./todos"

export default function* rootSaga() {
  yield all([fork(watchTodos)])
}
