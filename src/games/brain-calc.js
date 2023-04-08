import createDefaultOutput from '../index.js';
import generateRandomNum from '../utils.js';

const rule = 'What is the result of the expression?';
const generateCalculatorGame = () => {
  const randomFirstNum = generateRandomNum();
  const randomSecondNum = generateRandomNum();
  const operators = ['+', '-', '*'];
  const generateOperator = operators[generateRandomNum(3)];
  let result = 0;
  switch (generateOperator) {
    case '+':
      result = randomFirstNum + randomSecondNum;
      break;
    case '-':
      result = randomFirstNum - randomSecondNum;
      break;
    case '*':
      result = randomFirstNum * randomSecondNum;
      break;
    default:
      break;
  }
  const question = `${randomFirstNum} ${generateOperator} ${randomSecondNum}`;
  return [result.toString(), question];
};
const brainCalc = () => {
  createDefaultOutput(generateCalculatorGame, rule);
};
export default brainCalc;
