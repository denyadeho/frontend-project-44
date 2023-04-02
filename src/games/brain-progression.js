import askUser from "../cli.js";
import { generateRandomNum, getAnswer } from "../index.js";
const brainProgression = () => {
  const name = askUser();
  console.log('What number is missing in the progression?');

  for (let i = 0; i < 3; i += 1) {
    const randomStartNumber = generateRandomNum();
    const randomProgressionNumber = generateRandomNum(11);
    const randomNumOfCycle = Math.floor(Math.random() * (10 - 4) + 4);
    const result = [];
    let temp = randomStartNumber;
    result.push(temp);

    for (let j = 0; j < randomNumOfCycle; j += 1) {
      temp += randomProgressionNumber;
      result.push(temp);
    }

    const lengthOfArr = result.length - 1;
    const randomNumHide = generateRandomNum(lengthOfArr);
    const neededNumb = result[randomNumHide];
    result[randomNumHide] = '..';

    const textForQuestion = result.join(' ');

    console.log(`Question: ${textForQuestion}`);
    const answer = getAnswer();
    const numbAnswer = Number(answer);
    if (numbAnswer === neededNumb) {
      console.log('Correct!');
    } else {
      console.log(` ${answer} is wrong answer ;(. Correct answer was ${neededNumb}.`);
      console.log(`Let's try again, ${name}!`);
      break;
    }
    if (i === 2) {
      console.log(`Congratulations, ${name}!`);
    }
  }
};

export default brainProgression;
