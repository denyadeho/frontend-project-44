import readlineSync from 'readline-sync';
import askUser from "../cli.js";
import { generateRandomNum, getAnswer } from "../index.js";
const brainEven = () => {
  const name = askUser();
  console.log('Answer "yes" if the number is even, otherwise answer "no".');
  for (let i = 0; i < 3; i += 1) {
    const randomNum = generateRandomNum();
    console.log(`Question: ${randomNum}`);
    const answer = getAnswer();
    let correctAnswer = '';
    if (randomNum % 2 === 0) {
      correctAnswer = 'yes';
    } else {
      correctAnswer = 'no';
    }
    if (randomNum % 2 === 0 && answer === 'yes') {
      console.log('Correct!');
    } else if (randomNum % 2 === 1 && answer === 'no') {
      console.log('Correct!');
    } else {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainEven;
