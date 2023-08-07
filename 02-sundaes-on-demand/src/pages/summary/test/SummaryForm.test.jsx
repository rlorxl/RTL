import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import SummaryForm from '../SummaryForm';

describe('summary-form', () => {
  let checkbox;
  let confirmButton;

  const initialVariables = () => {
    checkbox = screen.getByRole('checkbox', {
      name: /terms and conditions/i,
    });
    confirmButton = screen.getByRole('button', { name: /confirm order/i });
  };

  const setup = () => {
    render(<SummaryForm />);
    initialVariables();
  };

  test('initial condiditions', () => {
    setup();
    expect(checkbox).not.toBeChecked();
    expect(confirmButton).toBeDisabled();
  });

  test('checkbox enables button on first click and disables on second click', async () => {
    setup();
    const user = userEvent.setup();

    await user.click(checkbox);
    expect(confirmButton).toBeEnabled();

    await user.click(checkbox);
    expect(confirmButton).toBeDisabled();
  });

  test('popover responds to hover', async () => {
    const user = userEvent.setup();
    render(<SummaryForm />);

    // 팝오버가 시작시 존재하지 않는지
    const nullPopover = screen.queryByText(
      /no ice cream will actually be delivered/i
    );
    expect(nullPopover).not.toBeInTheDocument();

    // 라벨에 마우스오버시 팝오버가 나타나는지
    const termsAndConditions = screen.getByText(/terms and conditions/i);
    await user.hover(termsAndConditions); // event
    const popover = screen.getByText(
      /no ice cream will actually be delivered/i
    );
    expect(popover).toBeInTheDocument();

    // 마우스 벗어났을때 팝오버가 사라지는지
    await user.unhover(termsAndConditions);
    expect(popover).not.toBeInTheDocument();
  });
});
