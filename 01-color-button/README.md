## React Test

`npm test`

expect(linkElement).toBeInTheDocument();

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

**assertions**

- toBeEnabled()
- toBeDisabled()
- toBeChecked()
  ...

**assertions of jest**
https://github.com/testing-library/jest-dom

### Types of Tests

- Unit test: one unit of code in isolation
- Integration test(통합): multiple units work together
- Functional test: 특정 함수X. 코드가 아닌 일반적인 동작에 한함.
