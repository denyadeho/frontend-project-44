import createDefaultOutput from '../index.js';
import generateRandomNum from '../utils.js';

const rule = 'Find the greatest common divisor of given numbers.';

const euclideanAlgorithm = (num1, num2) => {
  if (num1 === 0 || num2 === 0) {
    return Math.abs(num1 || num2);
  }
  const a = Math.abs(num1);
  const b = Math.abs(num2);
  if (a === b) {
    return a;
  }
  if (a > b) {
    return euclideanAlgorithm(a - b, b);
  }
  if (a < b) {
    return euclideanAlgorithm(a, b - a);
  }
  return null;
};
const generateGcdGame = () => {
  const randomFirstNum = generateRandomNum();
  const randomSecondNum = generateRandomNum();
  const correctAnswerToString = euclideanAlgorithm(randomFirstNum, randomSecondNum).toString();
  const question = `${randomFirstNum} ${randomSecondNum}`;
  return [correctAnswerToString, question];
};
const brainGcd = () => {
  createDefaultOutput(generateGcdGame, rule);
};
export default brainGcd;
