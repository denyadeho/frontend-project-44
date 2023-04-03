import { generateRandomNum, base } from '../index.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const isEven = (num) => num % 2 === 0 ? 'yes' : 'no';
const gameEven = () => {
  const randomNum = generateRandomNum();
  const correctAnswer = isEven(randomNum);
  const question = randomNum;
  return [correctAnswer, question];
};
const brainEven = () => {
  base(gameEven, rule);
};
export default brainEven;
