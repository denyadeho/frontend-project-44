import askUser from "../cli.js";
import { generateRandomNum, getAnswer } from "../index.js";
const brainPrime = () => {
  const name = askUser();
  console.log('Answer "yes" if given number is prime. Otherwise answer "no".');

  for (let i = 0; i < 3; i += 1) {
    const randomNum = generateRandomNum();
    console.log(`Question: ${randomNum}`);
    const answer = getAnswer();
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
    if (answer === isPrime(randomNum)) {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${isPrime(randomNum)}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainPrime;
