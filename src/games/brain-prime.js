import { generateRandomNum, base } from '../index.js';

const rule = 'Answer "yes" if given number is prime. Otherwise answer "no".'

const gamePrime = () => {
  const randomNum = generateRandomNum();
  const isPrime = (numb) => {
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
  const question = `${randomNum}`;
  return [isPrime(randomNum), question];
};
const brainPrime = () => {
  base(gamePrime, rule);
};
export default brainPrime;
