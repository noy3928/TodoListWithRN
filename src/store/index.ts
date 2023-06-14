import { configureStore } from "@reduxjs/toolkit"
import createSagaMiddleware from "redux-saga"
import rootReducer from "./slices"
import rootSaga from "./sagas"

const sagaMiddleware = createSagaMiddleware()

const createStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    devTools: true,
    middleware: [sagaMiddleware],
  })

  sagaMiddleware.run(rootSaga)

  return store
}

export default createStore

export type RootState = ReturnType<typeof rootReducer>
