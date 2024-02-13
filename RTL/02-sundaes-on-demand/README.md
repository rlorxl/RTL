# Sundae App

## eslint설정

1. eslint설치

```
npm i eslint-plugin-testing-library eslint-plugin-jest-dom`
```

2. package.json에서 eslintConfig부분 삭제
3. /.eslintrc.json - config추가

```js
  {
"plugins": ["jest-dom", "testing-library"],
"extends": [
  "react-app",
  "react-app/jest",
  "plugin:testing-library/react",
  "plugin:jest-dom/recommended"
]
}

```

4. /.vscode/settings.json - config추가

```js
  {
"editor.codeActionsOnSave": { "source.fixAll.eslint": true },
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.formatOnSave": true
}
```

5. gitignore - .eslintcache, .vscode추가

## user-event

일반적으로 `user-event`는 사용자 이벤트를 시뮬레이션하며 `fireEvent`보다 완전하고 현실적입니다.
`fireEvent`는 DOM이벤트를 디스패치하고 `user-event`는 모든 상호작용을 시뮬레이션합니다.

**ver.14**

```
npm i @testing-library/user-event@^14
```

```
import userEvent from '@testing-library/user-event';
```

**user-event API는 항상 프로미스를 반환합니다!**
user-event API를 호출하면 항상 비동기 처리를 해줘야 한다. (async-await)

```js
test('checkbox enables button on first click and disables on second click', async () => {
  setup(); // initial settings function
  const user = userEvent.setup(); // user객체를 정의

  await user.click(checkbox); // **await!!
  expect(confirmButton).toBeEnabled();
  await user.click(checkbox); // **await!!
  expect(confirmButton).toBeDisabled();
});
```

## queries

🔗https://testing-library.com/docs/queries/about#priority

쿼리들은 테스팅 라이브러리에서 페이지의 요소를 찾는것을 제공하는 방법이다. 여러타입의 쿼리가 있는데 ('get','find', 'query') 이들은 요소가 존재하지 않거나, 프로미스를 반환하고 재시도를 할 때 에러가 나는지의 여부에 차이가 있다.

| command |              desc              |
| :-----: | :----------------------------: |
|   get   |       DOM안에 있는 요소        |
|  query  |     DOM안에 있지 않은 요소     |
|  find   | 비동기적으로 업데이트되는 요소 |

## Provider로 래핑된 컴포넌트 테스트

**컴포넌트 하나당 래퍼를 설정하기**

```jsx
import { OrderDetailsProvider } from '../../../context/OrderDetails';

render(<Options optionType='scoops' />, { wrapper: OrderDetailsProvider });
```

**모든 컴포넌트에 전역으로 래퍼 설정하기** => [react-testing-library/setup](https://testing-library.com/docs/react-testing-library/setup)

custom render설정

```jsx
const customRender = (ui, options) =>
  render(ui, { wrapper: AllTheProviders, ...options });

// re-export everything
export * from '@testing-library/react';

// override render method
export { customRender as render };
```

`@testing-library/react`에서 import하던 `render`를 커스텀 render로 재정의한다. 필요한 모든 테스트 각각에 wrapper옵션을 사용하지 않고 Provider에 접근할 수 있도록 커스텀.
[Options.test.jsx 1~2lines](https://github.com/rlorxl/RTL/blob/main/RTL/02-sundaes-on-demand/src/pages/entry/tests/Options.test.jsx)
