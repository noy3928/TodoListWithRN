import { call, put } from "redux-saga/effects"
import { expectSaga, testSaga } from "redux-saga-test-plan"
import * as matchers from "redux-saga-test-plan/matchers"
import { throwError } from "redux-saga-test-plan/providers"

import {
  handleFetchTodos,
  handleAddTodos,
  handleUpdateTodos,
  handleDeleteTodos,
} from "../todos"
import * as API from "../../../services"
import { todoActions } from "../../slices/todos"
import { modalActions } from "../../slices/modal"
import { ERROR_MESSAGE } from "../../../shared/constants"
import { Todos } from "../../../shared/types"

describe("Todos saga", () => {
  describe("handleFetchTodos", () => {
    it("올바르게 todo 값들을 가져온다.", () => {
      const todos: Todos = [{ id: "1", content: "Test Todo" }]

      return expectSaga(handleFetchTodos)
        .provide([[call(API.fetchTodos), todos]])
        .put(todoActions.fetchTodoSuccess(todos))
        .run()
    })

    it("handleFetchTodos시 발생한 에러를 처리한다.", () => {
      const error = new Error("에러발생")

      return expectSaga(handleFetchTodos)
        .provide([[matchers.call.fn(API.fetchTodos), throwError(error)]])
        .put(todoActions.fetchTodoFailure(ERROR_MESSAGE.FETCH_FAILED))
        .run()
    })
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
      const error = new Error("에러발생")

      testSaga(handleAddTodos, mockAction)
        .next()
        .call(API.addTodo, mockTodo)
        .throw(error)
        .put(todoActions.addTodoFailure(ERROR_MESSAGE.ADD_FAILED))
        .next()
        .isDone()
    })
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
      const error = new Error("에러발생")

      testSaga(handleUpdateTodos, mockAction)
        .next()
        .call(API.updateTodo, mockTodo)
        .throw(error)
        .put(todoActions.updateTodoFailure(ERROR_MESSAGE.EDIT_FAILED))
        .next()
        .isDone()
    })
  })

  describe("handleDeleteTodos", () => {
    const mockId = "1234"
    const mockAction = { type: "todos/handleDeleteTodos", payload: mockId }

    it("Todo 삭제 작업이 성공적으로 수행되어야 한다.", () => {
      testSaga(handleDeleteTodos, mockAction)
        .next()
        .call(API.deleteTodo, mockId)
        .next()
        .put(todoActions.deleteTodoSuccess(mockId))
        .next()
        .isDone()
    })

    it("Todo 삭제 작업이 실패할 경우 에러를 처리해야 한다.", () => {
      const error = new Error("에러 발생")

      testSaga(handleDeleteTodos, mockAction)
        .next()
        .call(API.deleteTodo, mockId)
        .throw(error)
        .put(todoActions.deleteTodoFailure(error))
        .next()
        .isDone()
    })
  })
})
