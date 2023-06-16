import { testSaga } from "redux-saga-test-plan"
import AsyncStorage from "@react-native-async-storage/async-storage"

import { handleFetchTodos } from "../../todos"
import * as API from "../../../../services"
import { todoActions } from "../../../slices/todos"
import { PayloadTodos } from "../../../../shared/types"
import { ERROR_MESSAGE } from "../../../../shared/constants"

jest.mock("@react-navigation/native", () => {
  return {
    __esModule: true,
    createNavigationContainerRef: jest.fn(),
    CommonActions: {
      navigate: jest.fn(),
    },
  }
})

describe("handleFetchTodos", () => {
  const payload: PayloadTodos = {
    todos: [{ id: "1", content: "Test Todo" }],
    completionStatuses: { "1": false },
  }

  describe("completionStatuses 값이 존재하지 않는다면", () => {
    it("새롭게 setItem을 하고 값을 액션에 넘겨준다.", () => {
      testSaga(handleFetchTodos)
        .next()
        .call(API.fetchTodos)
        .next(payload.todos)
        .call(AsyncStorage.getItem, "completionStatuses")
        .next(null)
        .call(
          AsyncStorage.setItem,
          "completionStatuses",
          JSON.stringify(payload.completionStatuses)
        )
        .next()
        .put(todoActions.fetchTodoSuccess(payload))
        .next()
        .isDone()
    })
  })

  describe("completionStatuses 값이 존재한다면", () => {
    it("기존에 저장되어 있는 그 값을 사용한다.", () => {
      const storedStatuses = JSON.stringify(payload.completionStatuses)

      testSaga(handleFetchTodos)
        .next()
        .call(API.fetchTodos)
        .next(payload.todos)
        .call(AsyncStorage.getItem, "completionStatuses")
        .next(storedStatuses)
        .put(todoActions.fetchTodoSuccess(payload))
        .next()
        .isDone()
    })
  })

  it("handleFetchTodos시 발생한 에러를 처리한다.", () => {
    const error = new Error(ERROR_MESSAGE.REQUEST_FAILED)

    testSaga(handleFetchTodos)
      .next()
      .call(API.fetchTodos)
      .throw(error)
      .put(todoActions.fetchTodoFailure(error.message))
      .next()
      .isDone()
  })
})
