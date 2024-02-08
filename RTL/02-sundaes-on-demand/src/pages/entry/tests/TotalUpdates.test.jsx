import { render, screen } from '../../../test-utils/testing-library-utils';
import { userEvent } from '@testing-library/user-event';
import { expect } from 'vitest';
import Options from '../Options';

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
