import base from '../index.js';
import generateRandomNum from '../utils.js';

const rule = 'Answer "yes" if the number is even, otherwise answer "no".';
const gameEven = () => {
  const randomNum = generateRandomNum();
  const correctAnswer = randomNum % 2 === 0 ? 'yes' : 'no';
  const question = randomNum;
  return [correctAnswer, question];
};
const brainEven = () => {
  base(gameEven, rule);
};
export default brainEven;
