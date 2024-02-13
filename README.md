# React Testing Library

### 새 테스트를 작성할 때 고려할 점

**1. 무엇을 렌더할 것인지?**

- 테스트에 필요한 모든 걸 포함하는 최대한 작은 컴포넌트를 렌더한다.

**2. 컴포넌트를 렌더링할 때 전달할 프로퍼티가 있는지?**

**3. 컴포넌트를 Provider로 래핑하는지?**

**4. 테스트를 폴더구조의 어디에 둘 것인지?**

**5. 무엇을 테스트할 지?**

- 테스트가 필요한 동작이 무엇이고 어떻게 테스트할 것인지.
- 어떤 쿼리와 이벤트를 사용해 컴포넌트와 상호작용할 것인지.
- await를 써야 하는 쿼리가 있는지.
- 컴포넌트 내에 비동기 동작이 있는지.

### 링크

- [React Test: 테스트의 기본](https://github.com/rlorxl/RTL/blob/main/RTL/01-color-button/README.md)

  - [테스트 추가하기 (add)](https://github.com/rlorxl/RTL/blob/main/RTL/unit-basic/src/basic/test/add.test.js)
  - [describe & it / 비동기 테스트](https://github.com/rlorxl/RTL/blob/main/RTL/unit-basic/src/basic/test/async.test.js)
  - [calculator test](https://github.com/rlorxl/RTL/blob/main/RTL/unit-basic/src/basic/test/calculator.test.js)
  - [유저 인스턴스(user event)](https://github.com/rlorxl/RTL/blob/main/RTL/02-sundaes-on-demand/README.md#user-event)
  - [queries](https://github.com/rlorxl/RTL/blob/main/RTL/02-sundaes-on-demand/README.md#queries)
  - [initial conditions 셋업](https://github.com/rlorxl/RTL/blob/main/RTL/02-sundaes-on-demand/src/pages/summary/test/SummaryForm.test.jsx)

- [Provider로 래핑된 컴포넌트 테스트](https://github.com/rlorxl/RTL/blob/main/RTL/02-sundaes-on-demand/README.md#provider%EB%A1%9C-%EB%9E%98%ED%95%91%EB%90%9C-%EC%BB%B4%ED%8F%AC%EB%84%8C%ED%8A%B8-%ED%85%8C%EC%8A%A4%ED%8A%B8)

  - [커스텀 래퍼 코드](https://github.com/rlorxl/RTL/blob/main/RTL/02-sundaes-on-demand/src/test-utils/testing-library-utils.jsx)

- [서버요청 테스트](https://github.com/rlorxl/RTL/blob/main/RTL/02-sundaes-on-demand/src/pages/entry/tests/OrderEntry.test.jsx)
- [happy path 테스트](https://github.com/rlorxl/RTL/blob/main/RTL/02-sundaes-on-demand/src/tests/orderPhase.test.jsx)
- 컴포넌트 unmount를 트리거하여 axios요청 중단
  - [테스트 코드 62 line](https://github.com/rlorxl/RTL/blob/main/RTL/02-sundaes-on-demand/src/pages/entry/tests/TotalUpdates.test.jsxhttps://github.com/rlorxl/RTL/blob/main/RTL/02-sundaes-on-demand/src/pages/entry/tests/TotalUpdates.test.jsx)
  - [컴포넌트 코드 31 line](https://github.com/rlorxl/RTL/blob/main/RTL/02-sundaes-on-demand/src/pages/entry/Options.jsx)
 
### Common mistakes with React Testing Library
https://seongry.github.io/2021/06-20-common-mistakes-with-rty/

