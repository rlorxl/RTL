import { http, HttpResponse } from 'msw';
import { optionResponse } from '../constants/option';

// class OptionHandler {
//   constructor(option) {
//     this.option = option;
//   }

//   get handlers() {
//     throw new Error('서브클래스에서 처리');
//   }
// }

// export class ScoopsOption extends OptionHandler {
//   get handlers() {
//     const emptyArray = [];
//     return emptyArray.concat(
//       http.get(`http://localhost:3030/${this.option}`, () => {
//         return HttpResponse.json(optionResponse[this.option]);
//       })
//     );
//   }
// }

// export class ToppingsOption extends OptionHandler {
//   get handlers() {
//     const emptyArray = [];
//     return emptyArray.concat(
//       http.get(`http://localhost:3030/${this.option}`, () => {
//         return HttpResponse.json(optionResponse[this.option]);
//       })
//     );
//   }
// }

// export const handlers = (optionType) => {
//   switch (optionType) {
//     case 'scoops':
//       return new ScoopsOption(optionType).handlers;
//     case 'toppings':
//       return new ToppingsOption(optionType).handlers;
//     default:
//       throw new Error(`타입을 찾을 수 없습니다: ${option}`);
//   }
// };

export const handlers = [
  http.get('http://localhost:3030/scoops', async () => {
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
];
