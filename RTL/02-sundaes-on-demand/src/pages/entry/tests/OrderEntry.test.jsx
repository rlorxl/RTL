// import { render, screen } from '@testing-library/react';
import { http } from 'msw';
import { server } from '../../../mocks/server';
import { render, screen } from '../../../test-utils/testing-library-utils';
import OrderEntry from '../OrderEntry';

// test.only: 한 테스트 파일에 여러개의 테스트가 있는 경우에 하나의 테스트만 실행.
// test.skip: 한 테스트 파일에 여러개의 테스트가 있는 경우에 이 테스트를 건너뜀.
test.only('handles error for scoops and toppings route', async () => {
  server.resetHandlers(
    http.get('http://localhost:3030/scoops', () => {
      return new HttpResponse(null, { status: 500 });
    }),
    http.get('http://localhost:3030/toppings', () => {
      return new HttpResponse(null, { status: 500 });
    })
  );

  render(<OrderEntry />);

  const alerts = await screen.findAllByRole('alert');

  expect(alerts).toHaveLength(2);
});
