import { http, HttpResponse, delay } from 'msw';

export const handlers = [
  http.get('http://localhost:3030/scoops', () => {
    return HttpResponse.json([
      { name: 'Chocolate', imagePath: '/images/chocolate.png' },
      { name: 'Vanilla', imagePath: '/images/vanilla.png' },
    ]);
  }),
  http.get('http://localhost:3030/toppings', () => {
    return HttpResponse.json([
      { name: 'Cherries', imagePath: '/images/cherries.png' },
      { name: 'M&Ms', imagePath: '/images/m-and-ms.png' },
      { name: 'Hot fudge', imagePath: '/images/hot-fudge.png' },
    ]);
  }),
  http.post('http://localhost:3030/order', async () => {
    // 100ms초 딜레이를 줘서 테스트에서 'loading'상태 확인이 가능하게 한다.
    await delay(100);
    return HttpResponse.json({ orderNumber: 12345676 }, { status: 201 }); // 임의의 주문번호와 성공상태를 반환함.
  }),
];
