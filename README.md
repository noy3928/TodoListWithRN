## 실행방법

1. root 폴더에 .env 파일을 생성합니다.

```
API_URL={API_URL}
```

2. 의존성 패키지를 설치합니다.

```
$ yarn install
```

2. 프로젝트를 실행합니다.

```
$ yarn ios or yarn android
```

<br>

## 사용한 패키지와 버전

```js
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/native-stack": "^6.9.12",
    "@reduxjs/toolkit": "^1.9.5",
    "redux-saga": "^1.2.3"
    "react-redux": "^8.1.0",
    "redux": "^4.2.1",
    "axios": "^1.4.0",
    "react-native-bouncy-checkbox": "^3.0.7",
    "jest": "^29.5.0",
    "redux-saga-test-plan": "^4.0.6",
    "typescript": "^5.1.3"
    "dotenv": "^16.1.4",
    "expo-constants": "^14.2.1",
    "@react-native-async-storage/async-storage": "1.17.11",
```

<details>
<summary>사용한 패키지 설명</summary>
<div markdown="1">

- @react-navigation/native : 라우팅 작업을 위해 사용한 라이브러리
- @react-navigation/native-stack : 라우팅 작업을 위해 사용한 라이브러리
- @reduxjs/toolkit : 상태관리를 위해 사용한 라이브러리
- redux-saga : 비동기 작업을 위해 사용한 라이브러리
- axios : api 요청을 위해 사용한 라이브러리
- jest : 테스트를 위해 사용한 라이브러리
- redux-saga-test-plan : 사가 테스트를 위해 사용한 라이브러리
- typescript : 타입스크립트를 사용하기 위해 사용한 라이브러리
- dotenv : 환경변수를 사용하기 위해 사용한 라이브러리
- expo-constants : 환경변수를 사용하기 위해 사용한 라이브러리
- @react-native-async-storage/async-storage : 비동기 저장소를 사용하기 위해 사용한 라이브러리

</div>
</details>

<br>

## 폴더구조 및 아키텍처 설명

### 폴더구조

```js
📦src
 ┣ 📂assets
 ┣ 📂components
 ┃ ┣ 📂modal                        // 모달 관련 컴포넌트 폴더
 ┃ ┃ ┗ 📂TodoModal
 ┃ ┃ ┃ ┣ 📂view                     // VAC 컴포넌트 폴더
 ┃ ┃ ┃ ┃ ┣ 📜ActionButtonView.tsx   //
 ┃ ┃ ┃ ┃ ┗ 📜TodoModalView.tsx
 ┃ ┃ ┃ ┣ 📜TodoModal.tsx            // TodoModal 컴포넌트
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┣ 📂todo                         // Todo 관련 컴포넌트 폴더
 ┃ ┃ ┣ 📂Todo
 ┃ ┃ ┃ ┣ 📂view                     // VAC 컴포넌트 폴더
 ┃ ┃ ┃ ┃ ┣ 📜TodoActionsView.tsx
 ┃ ┃ ┃ ┃ ┗ 📜TodoView.tsx
 ┃ ┃ ┃ ┣ 📜Todo.tsx
 ┃ ┃ ┃ ┗ 📜index.ts
 ┃ ┃ ┗ 📜TodoText.tsx
 ┃ ┗ 📂ui                           // 공통 레이아웃
 ┃ ┃ ┗ 📜ControlBottomBar.tsx
 ┣ 📂screens                        // Screen 관련 컴포넌트 폴더
 ┃ ┣ 📂Detail
 ┃ ┃ ┣ 📂view                       // VAC 컴포넌트 폴더
 ┃ ┃ ┃ ┗ 📜DetailView.tsx
 ┃ ┃ ┣ 📜Detail.tsx                 // 디테일 페이지 컴포넌트
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📂Home
 ┃ ┃ ┣ 📂view                       // VAC 컴포넌트 폴더
 ┃ ┃ ┃ ┗ 📜HomeView.tsx
 ┃ ┃ ┣ 📜Home.tsx                   // 홈 페이지 컴포넌트
 ┃ ┃ ┗ 📜index.ts
 ┣ 📂services                       // 서비스 로직 관련 폴더
 ┃ ┣ 📂hooks                        // 커스텀 훅 관련 폴더
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜useHandleOpenModal.ts      // 모달을 열고 닫는 로직을 처리하는 커스텀 훅
 ┃ ┣ 📂apis                         // API 요청 관련 로직을 모아놓은 폴더
 ┃ ┃ ┣ 📜baseApi.ts
 ┃ ┃ ┣ 📜errorHandler.ts            // 에러 핸들링 로직을 모아놓은 파일
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜todos.ts
 ┃ ┗ 📜index.ts
 ┣ 📂shared                         // 공용으로 사용되는 값을 저장하는 폴더
 ┃ ┣ 📂theme                        // 컬러 테마 관련 폴더
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜theme.json
 ┃ ┣ 📂types                        // 타입 관련 폴더
 ┃ ┃ ┗ 📜index.ts
 ┃ ┗ 📜constants.ts                 // 상수 관련 파일
 ┗ 📂store                          // 리덕스 관련 폴더
 ┃ ┣ 📂sagas                        // 사가 폴더
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜todos.ts
 ┃ ┣ 📂slices                       // 슬라이스 폴더
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┣ 📜modal.ts
 ┃ ┃ ┗ 📜todos.ts
 ┃ ┗ 📜index.ts                     // 스토어 파일
```

### 아키텍처 설명

- 코드를 UI, View로직, 비지니스 로직, 데이터 로직으로 나누어서 관심사를 분리했습니다.
  - UI : VAC 패턴을 이용하여 로직 UI에만 관심을 쏟고 나머지는 외부에서 받아오도록 구현했습니다. 오직 렌더링에만 집중합니다.
  - View로직 : View 로직은 VAC 컴포넌트의 상위 컴포넌트에 위치하고 있습니다. View와 관련된 모든 로직은 이곳에서 처리되며, 필요한 로직은 props를 통해 VAC 컴포넌트에 전달됩니다.
  - 비지니스 로직 : API 요청, AsyncStorage를 통한 데이터 저장 및 접근 등의 비동기적인 비즈니스 로직은 Saga를 통해 처리했습니다.
  - 데이터 로직 : 데이터를 가져오고 가공하는 모든 로직은 Redux를 통해 관리했습니다.

<details>
<summary>VAC패턴 사용에 대한 소감</summary>
<div markdown="1">

- 장점 :
  - 코드 관심사 분리로 인해 코드 가독성이 좋아지는 것 같았습니다.
  - 큰 회사의 경우 퍼블리셔와 프론트개발자가 나누어져있기 때문에 그 나름대로 유익이 있을 것이라 생각했습니다. 설사 작은 스타트업이라 할지라도 디자인 시스템이 적용된 프로젝트의 경우 자동으로 VAC 패턴을 사용할 수 밖에 없겠다는 생각이 들었습니다.
  - 컴포넌트에 대한 테스트코드를 작성할 때, 더욱 테스트하기 쉬운 컴포넌트가 될 가능성이 높아진다고 생각이 되었습니다. 왜냐하면 VAC 컴포넌트의 경우엔 외부에 대한 의존성이 극히 적고, 모든 의존성을 명시적으로 props를 통해 받아오기 때문에 테스트하기 쉬울 것 같았습니다. 테스트하기 쉬운 코드가 작성된다는 것은 또한 코드의 품질이 올라간다는 것이고 이는 유지보수성 또한 올라가게 된다는 것을 의미한다고 생각했습니다.
  - 폴더상으로 렌더링과 관련된 컴포넌트와 로직과 관련된 컴포넌트가 분리되어있어, 폴더상의 가독성이 좋아질 수 있다고 생각되었습니다.
- 단점 :
  - 컴포넌트의 구조가 복잡해질 수록 props drilling이 생길 위험이 높아질 것 같았습니다. 이것은 또한 그 나름대로 유지보수성을 해치는 요인이 될 것이라고 생각되었습니다.
  - 파일이 많아지면서 폴더 구조가 복잡해질 수 있다는 단점이 있을 것 같았습니다.

</div>
</details>

<br>

## 구현해야하는 기능

- [x] Todo item 작성하기
  - [x] item이 공백일 경우, todo는 작성 불가능
  - [x] todo 작성하기는 모달로 구현
- [x] Todo item 삭제하기
- [x] Todo item 수정하기
  - [x] item이 공백일 경우, todo는 수정 불가능
  - [x] todo 수정하기와 작성하기의 UI는 최대한 통일성 있게 구현
- [x] Todo item 완료하기 표시 가능
  - [x] 앱을 껐다 켜도 완료한 상태는 그대로 남아있어야 함
  - [x] 완료된 todo는 수정 불가능
- [x] Todo item 클릭시 상세 페이지로 넘어가야 함
  - [x] 상세보기에서 완료/완료취소 가능
  - [x] 상세보기에서 todo는 수정가능
- [x] Todo item이 5줄 이상 넘어갈 경우 .. 처리
- [x] 화면을 아래로 밀어서 새로고침 가능
  - [x] 새로고침을 할 때마다, 최신 10개의 todo 아이템들이 보여야 함
  - [x] 새로운 todo가 추가될 때마다, 만들어진 todo는 최상단에 위치해야함
- [x] 무한 스크롤 방식으로 구현
  - [x] 화면 진입시 처음 10개 아이템을 호출한 후, 화면 하단에 도달할 경우 10개 추가로 호출
- [x] 사가함수에 대한 테스트코드 작성

<br>

## 구현 설명 :

### 토글된 값 저장하기

- 토글된 값은 AsyncStorage에 상태가 저장되도록 구현했습니다. 해당 작업은 비동기적인 로직이기에 사가안에서 관리하도록 만들었습니다.
  - 각 id에 대한 토글 상태값을 AsyncStorage에 저장하고, 화면 로드시 AsyncStorage에 저장된 값을 활용했습니다.
    - 초기 데이터가 없을 경우 모든 id에 대해 false 값을 지정하고 AsyncStorage에 저장했습니다.
  - 토글동작이 있을 때마다 해당 id에 대한 토글 상태값을 AsyncStorage에 저장했습니다.
    - 특히 토글 동작은 유저에 의해 연속적으로 일어날 가능성이 있기 때문에 takeLatest 이펙트를 사용했습니다.

<details>
<summary>데이터 패치시 토글 상태 값 관련 코드 소개</summary>
<div markdown="1">

```js
// 데이터 패치시 사가함수 코드
export function* handleFetchTodos(): Generator<any, any, any> {
  const { fetchTodoSuccess, fetchTodoFailure } = todoActions
  try {
    const todos = yield call(API.fetchTodos) // 데이터 패치
    const storedStatuses = yield call( // AsyncStorage에 저장된 상태값 가져오기
      AsyncStorage.getItem,
      "completionStatuses"
    )
    if (storedStatuses == null && storedStatuses == undefined) { // AsyncStorage에 저장된 상태값이 없을 경우
      const completionStatuses: { [key: string]: boolean } = {}
      for (const todo of todos) {
        completionStatuses[todo.id] = false
      }
      yield call(
        AsyncStorage.setItem,
        "completionStatuses",
        JSON.stringify(completionStatuses)
      )
      yield put(fetchTodoSuccess({ todos, completionStatuses }))
    } else { // AsyncStorage에 저장된 상태값이 있을 경우
      yield put(
        fetchTodoSuccess({
          todos,
          completionStatuses: JSON.parse(storedStatuses),
        })
      )
    }
  } catch (err) {
    yield put(fetchTodoFailure(ERROR_MESSAGE.FETCH_FAILED))
  }
}

// 데이터 패치 성공시 스토어에 저장하는 리듀서 코드
  fetchTodoSuccess: (state, action: PayloadAction<PayloadTodos>) => {
    state.isLoading = false
    const completionStatuses = action.payload.completionStatuses
    const newState = action.payload.todos.reverse().map(item => ({
      ...item,
      isCompleted: completionStatuses[item.id],
    }))
    state.todos = newState
  },
```

</div>
</details>

<details>
<summary>토글 동작시 AsyncStorage에 저장 코드 소개</summary>
<div markdown="1">

```js
// 토글 동작시 수행되는 사가함수 코드
export function* handleUpdateCompletionStatus(
  action: ActionType
): Generator<any, any, any> {
  const { updateCompletionStatusSuccess, updateCompletionStatusFailure } =
    todoActions
  const id = action.payload
  try {
    const storedStatuses = yield call(
      AsyncStorage.getItem,
      "completionStatuses"
    )
    const completionStatuses = JSON.parse(storedStatuses) || {}
    completionStatuses[id] = !completionStatuses[id]
    yield call(
      AsyncStorage.setItem,
      "completionStatuses",
      JSON.stringify(completionStatuses)
    )

    yield put(updateCompletionStatusSuccess(id))
  } catch (err) {
    yield put(updateCompletionStatusFailure(err))
  }
}

// 토글 동작시 수행되는 리듀서 코드
updateCompletionStatusSuccess: (state, { payload: id }) => {
  const newState = state.todos.map(item => {
    if (item.id === id) {
      return { ...item, isCompleted: !item.isCompleted }
    }
    return item
  })
  state.todos = newState
},
```

</div>
</details>

### 무한스크롤 구현

- 서버에서 페이징 기능을 제공하지 않기 때문에 임의로 클라이언트에서 값을 10개씩 잘라서 보여줬습니다.
- displayCount 값을 저장하고, displayCount 값만큼 화면에 보여줍니다.
- 화면이 하단의 10% 범위에 닿게되면 displayCount를 +10 해주었습니다. 이렇게 되면 10개씩 추가로 보여주게 됩니다.

<details>
<summary> 무한스크롤 코드 소개</summary>
<div markdown="1">

```js
// 초기 상태 값
const initialState: {
  ...
  displayCount: number
} = {
  ...
  displayCount: 10, // 화면에 보여줄 아이템 개수
}
...
// displayCount 값 증가시키는 액션 & 리듀서
increaseDisplayCount: state => {
  state.displayCount += 10
},
...
// 10개씩 잘라서 보여주도록 셀렉터 설정
const selectAllState = createSelector(
  (state: RootState) => state.todos.todos.slice(0, state.todos.displayCount),
  ...
)

...

// 사용부 코드

// 화면 하단에 닿으면 displayCount를 +10 해주는 함수
const handleDisplayMore = () => {
  const { increaseDisplayCount } = todoSlice.todoActions
  dispatch(increaseDisplayCount())
}

// FlatList에 onEndReachedThreshold를 0.1로 설정하여, 해당 범위에 닿으면 handleDisplayMore 함수를 실행
<FlatList
  ...
  onEndReached={handleDisplayMore}
  onEndReachedThreshold={0.1}
  ...
/>
```

</div>
</details>

### 에러 및 로딩 처리

- 에러가 발생했을 경우, axios의 interceptor를 활용하여 에러를 핸들링했습니다.
- 에러가 발생했을 경우, 스토어에 error라는 상태값을 저장하여, 에러메시지를 화면에 보여주도록 구현했습니다.
- 로딩 처리는 스토어에 isLoading이라는 상태값을 저장하여, 로딩중일 경우 ActivityIndicator를 보여주도록 구현했습니다.

<details>
<summary> 에러처리 코드 소개</summary>
<div markdown="1">

```js
// 에러 핸들링 코드 일부
axiosInstance.interceptors.response.use((_: AxiosResponse) => {
  return _
}, onResponseRejected)

function onResponseRejected(error: any) {
  const errorMessage = getErrorMessage(error)

  if (errorMessage === ERROR_MESSAGE.TIMEOUT_ERROR) {
    console.error("Timeout error: ", error.message)
  } else if (errorMessage === ERROR_MESSAGE.NETWORK_ERROR) {
    console.error("Network error: ", error.message)
  }

  throw new Error(errorMessage)
}

export default axiosInstance

export function getErrorMessage(error: any): string {
  if (error.code === "ECONNABORTED") {
    return ERROR_MESSAGE.TIMEOUT_ERROR
  }
  if (error.message === "Network Error") {
    return ERROR_MESSAGE.NETWORK_ERROR
  }

  return ERROR_MESSAGE.REQUEST_FAILED
}

// 에러 발생시 스토어에 저장 코드 일부
fetchTodoFailure: (state, { payload: error }) => {
  state.isLoading = false
  state.error = error
},

// 에러 발생시 화면에 보여줄 컴포넌트
{error && <Text style={styles.errorText}>{error}</Text>}
```

</div>
</details>

<details>
<summary> 로딩처리 코드 소개</summary>
<div markdown="1">

```js
// 로딩중일 경우 스토어에 저장 코드
addTodo: (state, { payload: todo }) => {
  state.isLoading = true
},
addTodoSuccess: (state, { payload: todo }) => {
  state.isLoading = false
  state.todos.unshift(todo)
},

// 로딩중일 경우 화면에 보여줄 컴포넌트
<Pressable style={styles.button} onPress={handleAddTodo} disabled={isLoading}>
  {isLoading ? (
    <ActivityIndicator />
  ) : (
    <Text style={styles.textStyle}>추가하기</Text>
  )}
</Pressable>
```

</div>
</details>

### Detail 페이지에서 삭제 기능 구현

- Detail 페이지에서 삭제가 가능하도록 만들었습니다.
- 삭제 요청 후 곧바로 홈페이지로 이동하도록 만들지 않고, 비동기적으로 사가에서 삭제가 완료된 것을 확인한 후 홈페이지로 이동하도록 구현했습니다.
  - navigaTo 라는 유틸을 따로 만든 후 해당 유틸을 사가 안에서 사용하도록 만들었습니다.

<details>
<summary> 디테일 페이지 삭제 후 홈으로 이동하는 코드 소개</summary>
<div markdown="1">

```js
// navigationUtils.ts
import {
  CommonActions,
  createNavigationContainerRef,
} from "@react-navigation/native"

export const navigationRef = createNavigationContainerRef()

export function navigateTo(routeName: string, params?: object) {
  if (navigationRef.isReady()) {
    navigationRef.dispatch(CommonActions.navigate(routeName, params))
  }
}

// App.tsx
...
  <NavigationContainer ref={navigationRef}>
    ...
  </NavigationContainer>
...

// sagas/todos.ts
export function* handleDeleteTodos(action: DeleteActionType): Generator<any, any, any> {
  const { deleteTodoSuccess, deleteTodoFailure } = todoActions
  try {
    const { id, page } = action.payload
    yield call(API.deleteTodo, id)
    yield put(deleteTodoSuccess(id)) // 삭제가 성공하면
    if (page == "Detail") navigateTo("Home") // Detail 페이지에서의 작업인지 확인 후 홈으로 이동
  } catch (err) {
    yield put(deleteTodoFailure(err))
  }
}

```

</div>
</details>

### 사가 함수에 대한 테스트코드 작성 [link](https://github.com/noy3928/TodoListWithRN/tree/main/src/store/sagas/tests/todos)

- 사가 함수에 대한 테스트코드를 작성했습니다.
- 사가 함수 안에서는 다양한 상황에 대한 비동기 로직이 작성되어있기 때문에, 테스트코드를 작성하는데 어려움이 있었습니다. 이를 위해 공식문서에서도 추천하는 redux-saga-test-plan 라이브러리를 사용했습니다.
- 다양한 상황에 대해서 발생할 수 있는 케이스를 분기하여 함수를 테스트했습니다.

<details>
<summary> 다양한 상황에 대해 케이스를 분기하여 테스트한 코드 소개 : </summary>
<div markdown="1">

```js
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
    const error = new Error(ERROR_MESSAGE.REQUEST_FAILED)

    testSaga(handleDeleteTodos, makeMockAction("Home"))
      .next()
      .call(API.deleteTodo, mockId)
      .throw(error)
      .put(todoActions.deleteTodoFailure(error.message))
      .next()
      .isDone()
  })
})
```

</div>
</details>

<br>

## Challenge Points

- 토글 상태 저장 :
  - 상황 : 토글 상태를 저장된 상태로 유지해야 했습니다. 해당 기능을 서버에서 제공하지 않기 때문에, 클라이언트 측에서 앱이 꺼지더라도 토글 상태를 저장할 수 있는 방법을 찾아야했습니다.
  - 해결 : AsyncStorage를 사용하여 토글 상태를 저장했습니다. AsyncStorage는 비동기적인 로직이기 때문에 사가에서 관리하도록 만들었습니다. 토글 상태를 저장할 때는 AsyncStorage에 저장된 상태값을 가져와서 해당 id에 대한 토글 상태값을 업데이트한 후 AsyncStorage에 다시 저장하는 방식으로 구현했습니다.
- 무한 스크롤 :
  - 상황 : 서버에서 페이징 기능을 제공하지 않기 때문에, 클라이언트 측에서 무한 스크롤을 구현해야 했습니다.
  - 해결 : 화면 하단에 닿으면 displayCount를 +10 해주는 방식으로 구현했습니다. 이렇게 되면 10개씩 추가로 보여주게 됩니다. 이때, FlatList의 onEndReachedThreshold를 0.1로 설정하여, 해당 범위에 닿으면 displayCount를 +10 해주는 함수를 실행하도록 구현했습니다.
- 삭제시 디테일 페이지에서 홈페이지로 이동 :
  - 상황 : 디테일 페이지에서 홈으로 이동할 때, 삭제가 완료된 것을 확인하지 않고 곧바로 홈으로 이동하는 것이 흐름상 옳지 못하다고 생각되었습니다. 따라서 삭제가 완료된 것을 확인 후 홈으로 이동할 수 있도록 비동기적으로 처리해야겠다고 생각했습니다. 이것을 구현하기 위해서는 리덕스 사가 안에서 네비게이션을 사용해야 했습니다.
  - 해결 : 이것을 구현하기 위해 navigationUtils라는 유틸을 만들어서 사용했습니다. react navigation의 공식문서에서 [prop 없이 네비게이션을 할 수 있는 방법](https://reactnavigation.org/docs/navigating-without-navigation-prop/)을 찾았고, 해당 내용을 적용하여 navigationUtils를 만들었습니다. 이후 navigationUtils를 사가에서 사용하여 디테일 페이지에서 삭제가 완료된 것을 확인한 후 홈으로 이동하도록 구현했습니다.
-
