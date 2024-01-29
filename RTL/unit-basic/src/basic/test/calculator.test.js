const Calculater = require('../calculator.js');

// describe : 관련있는 테스트를 그룹으로 만들기
describe('Calculator', () => {
  /* beforeEach : 각 테스트는 서로에게 영향을 주지 않도록 독립적으로 만들어야 하는데 
  그렇다고 매번 오브젝트를 초기화하기에는 코드 중복이 일어난다. 
  beforeEach는 각 테스트의 실행전에 먼저 실행된후 테스트가 진행된다. */
  let cal;
  beforeEach(() => {
    cal = new Calculater();
  });

  // it : Calculator를 가리키는 3인칭 대명사임.
  it('inits with 0', () => {
    // const cal = new Calculater();
    expect(cal.value).toBe(0);
  });

  it('sets', () => {
    // const cal = new Calculater();
    cal.set(9);
    expect(cal.value).toBe(9);
  });

  it('clear to 0', () => {
    cal.set(9);
    cal.clear();
    expect(cal.value).toBe(0);
  });

  it('add', () => {
    cal.set(1);
    cal.add(5);
    expect(cal.value).toBe(6);
  });

  it('add should throw an error if valueee is greater than 100', () => {
    expect(() => {
      // 콜백함수안에서 에러가 예상되는 코드를 작성한다. (함수로 빼도 됨)
      cal.add(101);
    }).toThrow('Value can not be greater than 100');
  });

  it('subtract', () => {
    cal.set(9);
    cal.subtract(5);
    expect(cal.value).toBe(4);
  });

  it('multiply', () => {
    cal.set(9);
    cal.multiply(5);
    expect(cal.value).toBe(45);
  });

  // describe안에서 describe를 쓸 수 있다.
  describe('divides', () => {
    it('0 / 0 === NaN', () => {
      cal.divide(0);
      expect(cal.value).toBe(NaN);
    });

    it('1 / 0 === Infinity', () => {
      cal.set(1);
      cal.divide(0);
      expect(cal.value).toBe(Infinity);
    });

    it('4 / 4 === 1', () => {
      cal.set(4);
      cal.divide(4);
      expect(cal.value).toBe(1);
    });
  });
});
