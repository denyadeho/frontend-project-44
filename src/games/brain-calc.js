import { generateRandomNum, base } from '../index.js';

const rule = 'What is the result of the expression?';
const calcGame = () => {
  const randomFirstNum = generateRandomNum();
  const randomSecondNum = generateRandomNum();
  const randomOperator = generateRandomNum(3);
  let result = 0;
  let operator = '';
  switch (randomOperator) {
    case 0:
      operator = '+';
      result = randomFirstNum + randomSecondNum;
      break;
    case 1:
      operator = '-';
      result = randomFirstNum - randomSecondNum;
      break;
    case 2:
      operator = '*';
      result = randomFirstNum * randomSecondNum;
      break;
    default:
      break;
  }
  const question = `${randomFirstNum} ${operator} ${randomSecondNum}`;
  return [result.toString(), question];
};
const brainCalc = () => {
  base(calcGame, rule);
};
export default brainCalc;
