import { testSaga } from "redux-saga-test-plan"

import { handleUpdateTodos } from "../../todos"
import * as API from "../../../../services"
import { todoActions } from "../../../slices/todos"
import { modalActions } from "../../../slices/modal"
import { ERROR_MESSAGE } from "../../../../shared/constants"

jest.mock("@react-navigation/native", () => {
  return {
    __esModule: true,
    createNavigationContainerRef: jest.fn(() => ({
      isReady: jest.fn().mockReturnValue(true),
      dispatch: jest.fn(),
    })),
    CommonActions: {
      navigate: jest.fn(),
    },
  }
})

describe("handleUpdateTodos", () => {
  const mockTodo = { id: "1", content: "업데이트 할 일" }
  const mockAction = { type: "todos/updateTodo", payload: mockTodo }

  it("Todo를 업데이트하는 작업이 성공적으로 수행되어야 한다.", () => {
    testSaga(handleUpdateTodos, mockAction)
      .next()
      .call(API.updateTodo, mockTodo)
      .next(mockTodo)
      .put(todoActions.updateTodoSuccess(mockTodo))
      .next()
      .put(modalActions.closeModal())
      .next()
      .isDone()
  })

  it("handleUpdateTodos에 실패시 발생한 에러를 처리한다.", () => {
    const error = new Error(ERROR_MESSAGE.REQUEST_FAILED)

    testSaga(handleUpdateTodos, mockAction)
      .next()
      .call(API.updateTodo, mockTodo)
      .throw(error)
      .put(todoActions.updateTodoFailure(ERROR_MESSAGE.REQUEST_FAILED))
      .next()
      .isDone()
  })
})
