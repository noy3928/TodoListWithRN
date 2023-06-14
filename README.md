## 실행방법

## 사용한 패키지와 버전

```js
    "@react-navigation/native": "^6.1.6",
    "@react-navigation/native-stack": "^6.9.12",
    "@reduxjs/toolkit": "^1.9.5",
    "axios": "^1.4.0",
    "react-native-bouncy-checkbox": "^3.0.7",
    "react-native-config": "^1.5.1",
    "react-redux": "^8.1.0",
    "redux": "^4.2.1",
    "redux-saga": "^1.2.3"
    "jest": "^29.5.0",
    "typescript": "^5.1.3"
```

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
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜todos.ts
 ┃ ┗ 📜index.ts
 ┣ 📂shared                         // 공용으로 사용되는 값을 저장하는 폴더
 ┃ ┣ 📂theme                        // 컬러 테마 관련 폴더
 ┃ ┃ ┣ 📜index.ts
 ┃ ┃ ┗ 📜theme.json
 ┃ ┣ 📂types                        // 타입 관련 폴더
 ┃ ┃ ┗ 📜index.ts
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
