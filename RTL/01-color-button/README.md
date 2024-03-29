# React Test

테스트 실행

```
`npm test`
```

기본형

```js
expect(linkElement).toBeInTheDocument();
```

- expect : assertion
- linkElement : argument(test name, func)
- toBeInTheDocument(arg) : matcher

```js
// assertion
expect(element.textContent).toBe('hello');

test('renders learn react link', () => {
  render(<App />); // 앱 실행
  const linkElement = screen.getByText(/learn react/i); // 식별자 참조 (getByText, getByRole ...)
  expect(linkElement).toBeInTheDocument(); // 테스트
});
```

## jest-dom assertions

- toBeEnabled()
- toBeDisabled()
- toBeChecked()
  ...

### reference

https://testing-library.com/docs/react-testing-library/cheatsheet/
https://github.com/testing-library/jest-dom

---

## Types of Tests

- Unit test: one unit of code in isolation
- Integration test(통합): multiple units work together
- Functional test: 특정 함수X. 코드가 아닌 일반적인 동작에 한함.

### 버튼 클릭시 테스트

```js
test('button has correct initial color, and updates when clicked', () => {
  render(<App />);

  // 1. find the button
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  // 2. check initial color
  expect(colorButton).toHaveStyle('backgroundColor: red');
  // 3. active button click event
  fireEvent.click(colorButton);
  // 4. check the button's bg color change to blue
  expect(colorButton).toHaveStyle('backgroundColor: blue');
  // 5. check the button text chagne to 'Change to red'
  expect(colorButton).toHaveTextContent('Change to red');
});
```

코드:[5~20lines](https://github.com/rlorxl/RTL/blob/main/RTL/01-color-button/src/App.test.js)
