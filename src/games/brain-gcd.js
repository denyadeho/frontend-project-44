import askUser from "../cli.js";
import { generateRandomNum, getAnswer } from "../index.js";
const brainGcd = () => {
  const name = askUser();
  console.log('Find the greatest common divisor of given numbers.');

  for (let i = 0; i < 3; i += 1) {
    const randomFirstNum = generateRandomNum();
    const randomSecondNum = generateRandomNum();

    let result = 0;
    if (randomFirstNum > randomSecondNum) {
      for (let j = randomFirstNum; j > 0; j -= 1) {
        if (randomFirstNum % j === 0 && randomSecondNum % j === 0) {
          result = j;
          break;
        }
      }
    } else {
      for (let z = randomSecondNum; z > 0; z -= 1) {
        if (randomFirstNum % z === 0 && randomSecondNum % z === 0) {
          result = z;
          break;
        }
      }
    }
    console.log(`Question: ${randomFirstNum} ${randomSecondNum}`);
    const answer = getAnswer();
    const numbAnswer = Number(answer);
    if (numbAnswer === result) {
      console.log('Correct!');
    } else {
      console.log(` ${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainGcd;
