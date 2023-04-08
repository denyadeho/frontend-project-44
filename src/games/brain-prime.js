import createDefaultOutput from '../index.js';
import generateRandomNum from '../utils.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".';
const checkPrimeNum = (numb) => {
  let count = 0;
  for (let j = 1; j <= numb; j += 1) {
    if (numb % j === 0) {
      count += 1;
    }
  }
  if (count === 2) {
    return 'yes';
  }
  return 'no';
};
const generatePrimeGame = () => {
  const randomNum = generateRandomNum();
  const question = `${randomNum}`;
  return [checkPrimeNum(randomNum), question];
};
const brainPrime = () => {
  createDefaultOutput(generatePrimeGame, rule);
};
export default brainPrime;
