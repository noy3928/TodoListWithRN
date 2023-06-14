## 실행방법

1. 의존성 패키지를 설치합니다.

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
    "axios": "^1.4.0",
    "react-native-bouncy-checkbox": "^3.0.7",
    "react-native-config": "^1.5.1",
    "react-redux": "^8.1.0",
    "redux": "^4.2.1",
    "redux-saga": "^1.2.3"
    "jest": "^29.5.0",
    "typescript": "^5.1.3"
```

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
  - [ ] 앱을 껐다 켜도 완료한 상태는 그대로 남아있어야 함
  - [x] 완료된 todo는 수정 불가능
- [x] Todo item 클릭시 상세 페이지로 넘어가야 함
  - [x] 상세보기에서 완료/완료취소 가능
  - [x] 상세보기에서 todo는 수정가능
- [x] Todo item이 5줄 이상 넘어갈 경우 .. 처리
- [x] 화면을 아래로 밀어서 새로고침 가능
  - [x] 새로고침을 할 때마다, 최신 10개의 todo 아이템들이 보여야 함
- 새로운 todo가 추가될 때마다, 만들어진 todo는 최상단에 위치해야함
- [x] 무한 스크롤 방식으로 구현
  - [x] 화면 진입시 처음 10개 아이템을 호출한 후, 화면 하단에 도달할 경우 10개 추가로 호출

<br>

## Challenge Points

- env 설정을 제대로 진행하지 못했습니다. react-native-config를 통해 env를 사용할 수 있도록 구현하려고 하였지만, expo 실행 환경과 native 실행환경에 대한 이해부족으로 인해 진행하지 못했습니다. xcode에서 config 파일을 설정하고, develop 환경에서 실행하는 run script를 작성하였지만, 실행이 되지 않았습니다.
  - src/services/apis/baseApi.ts 에서 직접 api 주소를 입력 후 실행해야합니다. 
- 수정하기 기능을 완성하지 못했습니다. 기존의 다른 api와 마찬가지로 api 요청을 보내는 작업을 진행했지만, 수정이 되지 않았습니다. 클라이언트쪽에서 어떤 문제가 있는 것인지 확인하기 위해 log를 찍어보고, 요청을 보내는 부분까지 확인을 해봤지만 문제가 없다고 판단되었습니다. 추후에 다시 확인해보려하였지만, 시간이 부족해 완료하지 못했습니다.
- 앱을 껐다 켜도 완료한 상태가 그대로 남아있도록 하는 기능을 완료하지 못했습니다. redux-persist와 asyncStorage를 활용하려고 하였으나, expo 환경에서 제대로 실행되지 않는 부분이 있었습니다. 해당 부분도 마찬가지로 native 실행환경에 대한 이해부족으로 완료하지 못했습니다.
