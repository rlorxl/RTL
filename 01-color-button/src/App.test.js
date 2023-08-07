import { fireEvent, render, screen } from '@testing-library/react';
import App from './App';
import { replaceCamelWithSpaces } from './App';

test('button has correct initial color, and updates when clicked', () => {
  render(<App />);
  // const linkElement = screen.getByText(/learn react/i);
  // expect(linkElement).toBeInTheDocument();

  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toHaveStyle('backgroundColor: red');

  // 버튼 클릭 이벤트 활성화
  fireEvent.click(colorButton);
  // bg색상이 blue로 변경되는지 확인
  expect(colorButton).toHaveStyle('backgroundColor: blue');
  // 버튼텍스트가 'Change to red'로 변경되는지 확인
  expect(colorButton).toHaveTextContent('Change to red');
});

test('initial conditions', () => {
  render(<App />);
  // 버튼이 활성화된 상태로 시작되는지 확인
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });
  expect(colorButton).toBeEnabled();

  // 체크박스가 체크되어있지 않은 상태로 시작되는지 확인
  const checkbox = screen.getByRole('checkbox');
  expect(checkbox).not.toBeChecked();
});

test('Checkbox disables button on first click and enables on second click', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' }); // name: label의 텍스트
  const colorButton = screen.getByRole('button');

  fireEvent.click(checkbox);
  expect(colorButton).toBeDisabled();

  fireEvent.click(checkbox);
  expect(colorButton).toBeEnabled();
});

test('Disabled button gas gray background and reverts to red', () => {
  render(<App />);
  const checkbox = screen.getByRole('checkbox', { name: 'Disable button' });
  const colorButton = screen.getByRole('button', { name: 'Change to blue' });

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: gray');

  fireEvent.click(checkbox);
  expect(colorButton).toHaveStyle('background-color: red');
});

// Unit test
describe('spaces before camel-case capital letters', () => {
  test('no inner capital letters', () => {
    expect(replaceCamelWithSpaces('Red')).toBe('Red');
  });
  test('one inner capital letter', () => {
    expect(replaceCamelWithSpaces('MidnightBlue')).toBe('Midnight Blue');
  });
  test('multiple capital letters', () => {
    expect(replaceCamelWithSpaces('MediumVioletRed')).toBe('Medium Violet Red');
  });
});
