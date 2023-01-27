import readlineSync from 'readline-sync';
import askUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askUser();
console.log('What number is missing in the progression?');
for (let i = 0; i < 3; i++) {
  const randomStartNumber = Math.floor(Math.random() * 101);
  const randomProgressionNumber = Math.floor(Math.random() * 11);
  const randomCycle = Math.floor(Math.random() * (10 - 4) + 4);
  const result = [];
  let temp = randomStartNumber;
  result.push(temp);
  for (let i = 0; i < randomCycle; i++) {
    temp += randomProgressionNumber;
    result.push(temp);
  }
  const lengthOfArr = result.length - 1;
  const randomNumHide = Math.floor(Math.random() * lengthOfArr);
  const neededNumb = result[randomNumHide];
  result[randomNumHide] = '..';

  const textForQuestion = result.join(' ');

  console.log(`Question: ${textForQuestion}`);
  const answer = readlineSync.question('Your answer: ');
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
