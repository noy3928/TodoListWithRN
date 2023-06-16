import { testSaga } from "redux-saga-test-plan"

import { handleAddTodos } from "../../todos"
import * as API from "../../../../services"
import { todoActions } from "../../../slices/todos"
import { modalActions } from "../../../slices/modal"
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

describe("handleAddTodos", () => {
  const mockTodo = "새로운 할 일"
  const mockAction = { type: "todos/addTodo", payload: mockTodo }

  it("Todo를 추가하는 작업이 성공적으로 수행되어야 한다.", () => {
    testSaga(handleAddTodos, mockAction)
      .next()
      .call(API.addTodo, mockTodo)
      .next(mockTodo)
      .put(todoActions.addTodoSuccess(mockTodo))
      .next()
      .put(modalActions.closeModal())
      .next()
      .isDone()
  })

  it("handleAddTodos에 실패시 발생한 에러를 처리한다.", () => {
    const error = new Error(ERROR_MESSAGE.REQUEST_FAILED)

    testSaga(handleAddTodos, mockAction)
      .next()
      .call(API.addTodo, mockTodo)
      .throw(error)
      .put(todoActions.addTodoFailure(ERROR_MESSAGE.REQUEST_FAILED))
      .next()
      .isDone()
  })
})
