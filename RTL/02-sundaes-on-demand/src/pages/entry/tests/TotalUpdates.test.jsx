import { render, screen } from '../../../test-utils/testing-library-utils';
import { userEvent } from '@testing-library/user-event';
import { describe, expect } from 'vitest';

import Options from '../Options';
import OrderEntry from '../OrderEntry';

test('update scoop subtotal when scoops change', async () => {
  render(<Options optionType='scoops' />);

  // 총금액 합계가 $0.00에서 시작하는지 확인
  const scoopsSubtotal = screen.getByText('Scoops total: $', { exact: false }); // * exact: 전체문자열이 일치하는지 확인한다. (false: 부분만 일치)
  expect(scoopsSubtotal).toHaveTextContent('0.00');

  // vanilla scoop 1추가 후, subtotal 확인
  const vanillaInput = await screen.findByRole('spinbutton', {
    name: 'Vanilla',
  }); // * 비동기 업데이트 요소에 find쿼리 사용.

  const user = userEvent.setup();
  await user.clear(vanillaInput); // * 다음단계로 넘어가기전 이미 입력되어있던 내용에 대한 clear 수행.
  await user.type(vanillaInput, '1');
  expect(scoopsSubtotal).toHaveTextContent('2.00');

  // chocolate scoop 2추가 후, subtotal 확인
  const chocolateInput = await screen.findByRole('spinbutton', {
    name: 'Chocolate',
  });
  await user.clear(chocolateInput);
  await user.type(chocolateInput, '2');
  expect(scoopsSubtotal).toHaveTextContent('6.00');
});

test('update toppings subtotal when toppings change', async () => {
  const user = userEvent.setup();
  render(<Options optionType='toppings' />);

  // 총금액 합계가 $0.00에서 시작하는지 확인
  const toppingsTotal = screen.getByText('Toppings total: $', { exact: false });
  expect(toppingsTotal).toHaveTextContent('0.00');

  // cherriess 추가 후, subtotal 확인
  const cherriesCheckbox = await screen.findByRole('checkbox', {
    name: 'Cherries',
  });

  await user.click(cherriesCheckbox);
  expect(toppingsTotal).toHaveTextContent('1.50');

  // hot fudge 추가 후, subtotal 확인
  const hotFudgeCheckbox = screen.getByRole('checkbox', { name: 'Hot fudge' });
  await user.click(hotFudgeCheckbox);
  expect(toppingsTotal).toHaveTextContent('3.00');

  // hot fudge 제거 후 subtotal 확인
  await user.click(hotFudgeCheckbox);
  expect(toppingsTotal).toHaveTextContent('1.50');
});

describe('grand total', () => {
  test('grand total starts at $0.00', () => {
    const { unmount } = render(<OrderEntry />); // unmount메소드로 useEffect의 반환함수(return)를 트리거하여 컴포넌트를 언마운트 시킴.
    const grandTotal = screen.getByRole('heading', { name: /Grand total: \$/ });
    expect(grandTotal).toHaveTextContent('0.00');

    unmount();
  });

  test('grand total updates properly if scoop is added first', async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);
    const grandTotal = screen.getByRole('heading', { name: /Grand total: \$/ });

    // update vanilla scoops to 2 and check grand total
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    });
    await user.clear(vanillaInput);
    await user.type(vanillaInput, '2');
    expect(grandTotal).toHaveTextContent('4.00');

    // add cherries and check grand total
    const cherriesCheckbox = await screen.findByRole('checkbox', {
      name: 'Cherries',
    });
    await user.click(cherriesCheckbox);
    expect(grandTotal).toHaveTextContent('5.50');
  });

  test('grand total updates properly if topping is added first', async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);
    const grandTotal = screen.getByRole('heading', { name: /Grand total: \$/ });

    const cherriesCheckbox = await screen.findByRole('checkbox', {
      name: 'Cherries',
    });
    await user.click(cherriesCheckbox);
    expect(grandTotal).toHaveTextContent('1.50');

    // update vanilla scoops to 2 and check grand total
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    });
    await user.clear(vanillaInput);
    await user.type(vanillaInput, '2');
    expect(grandTotal).toHaveTextContent('5.50');
  });

  test('grand total updates properly if item is removed', async () => {
    const user = userEvent.setup();
    render(<OrderEntry />);

    // add cherries
    const cherriesCheckbox = await screen.findByRole('checkbox', {
      name: 'Cherries',
    });
    await user.click(cherriesCheckbox);
    // grand total $1.50

    // update vanilla scoops to 2; grand total should be $5.50
    const vanillaInput = await screen.findByRole('spinbutton', {
      name: 'Vanilla',
    });
    await user.clear(vanillaInput);
    await user.type(vanillaInput, '2');

    // remove 1 scoop of vanilla and check grand total
    await user.clear(vanillaInput);
    await user.type(vanillaInput, '1');

    // check grand total
    const grandTotal = screen.getByRole('heading', { name: /Grand total: \$/ });
    expect(grandTotal).toHaveTextContent('3.50');

    // remove cherries and check grand total
    await user.click(cherriesCheckbox);
    expect(grandTotal).toHaveTextContent('2.00');
  });
});
