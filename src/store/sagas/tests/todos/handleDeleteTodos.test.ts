import { testSaga } from "redux-saga-test-plan"

import { handleDeleteTodos } from "../../todos"
import * as API from "../../../../services"
import { todoActions } from "../../../slices/todos"
import * as navigateUtils from "../../../../services/navigation/navigateUtils"

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

describe("handleDeleteTodos", () => {
  const mockId = "1234"
  const makeMockAction = (page: string) => ({
    type: "todos/handleDeleteTodos",
    payload: { id: mockId, page },
  })

  afterEach(() => {
    jest.clearAllMocks()
  })

  describe("디테일 페이지에서 삭제를 진행할 경우", () => {
    it("삭제완료 후 Home으로 이동하는 navigate함수가 호출되어야 한다.", () => {
      const navigateToSpy = jest.spyOn(navigateUtils, "navigateTo")

      testSaga(handleDeleteTodos, makeMockAction("Detail"))
        .next()
        .call(API.deleteTodo, mockId)
        .next()
        .put(todoActions.deleteTodoSuccess(mockId))
        .next()
        .isDone()

      expect(navigateToSpy).toHaveBeenCalledWith("Home")
    })
  })

  describe("디테일 페이지가 아닌 곳에서 삭제를 진행하면", () => {
    it("삭제완료 후 Home으로 이동하는 navigate함수가 호출되지 않는다.", () => {
      const navigateToSpy = jest.spyOn(navigateUtils, "navigateTo")

      testSaga(handleDeleteTodos, makeMockAction("Home"))
        .next()
        .call(API.deleteTodo, mockId)
        .next()
        .put(todoActions.deleteTodoSuccess(mockId))
        .next()
        .isDone()

      expect(navigateToSpy).not.toHaveBeenCalledWith("Home")
    })
  })

  it("Todo 삭제 작업이 실패할 경우 에러를 처리해야 한다.", () => {
    const error = new Error("에러 발생")

    testSaga(handleDeleteTodos, makeMockAction("Home"))
      .next()
      .call(API.deleteTodo, mockId)
      .throw(error)
      .put(todoActions.deleteTodoFailure(error))
      .next()
      .isDone()
  })
})
