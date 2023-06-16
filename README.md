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

## 폴더구조

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

- 토글된 값은 AsyncStorage에 상태가 저장되도록 구현했습니다.
  - 각 id에 대한 토글 상태값을 AsyncStorage에 저장하고, 화면 로드시 AsyncStorage에 저장된 값을 활용했습니다.
    - 초기 데이터가 없을 경우 모든 id에 대해 false 값을 지정하고 AsyncStorage에 저장했습니다.
  - 토글작업을 할 때마다 해당 id에 대한 토글 상태값을 AsyncStorage에 저장했습니다.

코드 소개 :

```js
// 데이터 패치시 사가함수 코드 일부
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

// 데이터 패치 성공시 스토어에 저장 코드 일부
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

### 무한스크롤 구현

- 서버에서 페이징 기능을 제공하지 않기 때문에 임의로 클라이언트에서 값을 10개씩 잘라서 보여줬습니다.
- displayCount 값을 저장하고, displayCount 값만큼 화면에 보여줍니다.
- 화면이 하단의 10% 범위에 닿게되면 displayCount를 +10 해주었습니다. 이렇게 되면 10개씩 추가로 보여주게 됩니다.

코드 소개 :

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

### 에러 및 로딩 처리

- 에러가 발생했을 경우, axios의 interceptor를 활용하여 에러를 핸들링했습니다.
- 에러가 발생했을 경우, 스토어에 error라는 상태값을 저장하여, 에러메시지를 화면에 보여주도록 구현했습니다.
- 로딩 처리는 스토어에 isLoading이라는 상태값을 저장하여, 로딩중일 경우 ActivityIndicator를 보여주도록 구현했습니다.

에러처리 코드 소개 :

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

로딩처리 코드 소개 :

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
