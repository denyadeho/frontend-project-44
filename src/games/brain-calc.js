import askUser from "../cli.js";
import { generateRandomNum, getAnswer } from "../index.js";
const brainCalc = () => {
  const name = askUser();
  console.log('What is the result of the expression?');
  for (let i = 0; i < 3; i += 1) {
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
    console.log(`Question: ${randomFirstNum} ${operator} ${randomSecondNum}`);
    const answer = getAnswer();
    const numbAnswer = Number(answer);
    if (numbAnswer === result) {
      console.log('Correct!');
    } else {
      console.log(`${answer} is wrong answer ;(. Correct answer was ${result}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainCalc;
