import { testSaga } from "redux-saga-test-plan"
import AsyncStorage from "@react-native-async-storage/async-storage"
import { handleUpdateCompletionStatus } from "../../todos"
import { todoActions } from "../../../slices/todos"

jest.mock("@react-navigation/native", () => {
  return {
    __esModule: true,
    createNavigationContainerRef: jest.fn(),
    CommonActions: {
      navigate: jest.fn(),
    },
  }
})

describe("handleUpdateCompletionStatus", () => {
  it("토글 상태를 올바르게 업데이트해야한다.", () => {
    const mockId = "1"
    const mockCompletionStatuses = { [mockId]: false }

    jest
      .spyOn(AsyncStorage, "getItem")
      .mockImplementationOnce(() =>
        Promise.resolve(JSON.stringify(mockCompletionStatuses))
      )
    jest
      .spyOn(AsyncStorage, "getItem")
      .mockImplementationOnce(() =>
        Promise.resolve(JSON.stringify(mockCompletionStatuses))
      )

    testSaga(handleUpdateCompletionStatus, {
      type: "updateCompletionStatus",
      payload: mockId,
    })
      .next()
      .call(AsyncStorage.getItem, "completionStatuses")
      .next(JSON.stringify(mockCompletionStatuses))
      .call(
        AsyncStorage.setItem,
        "completionStatuses",
        JSON.stringify({ [mockId]: true })
      )
      .next()
      .put(todoActions.updateCompletionStatusSuccess(mockId))
      .next()
      .isDone()
  })

  it("토글 상태 업데이트 작업이 실패한 경우 에러를 처리해야한다", () => {
    const mockId = "1"
    const mockError = new Error("AsyncStorage error")

    jest
      .spyOn(AsyncStorage, "getItem")
      .mockImplementationOnce(() => Promise.reject(mockError))

    testSaga(handleUpdateCompletionStatus, {
      type: "updateCompletionStatus",
      payload: mockId,
    })
      .next()
      .call(AsyncStorage.getItem, "completionStatuses")
      .throw(mockError)
      .put(todoActions.updateCompletionStatusFailure(mockError))
      .next()
      .isDone()
  })
})
