import readlineSync from 'readline-sync';
import askUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askUser();
console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < 3; i++) {
  const randomFirstNum = Math.floor(Math.random() * 101);
  const randomSecondNum = Math.floor(Math.random() * 101);

  let result = 0;
  if (randomFirstNum > randomSecondNum) {
    for (let i = randomFirstNum; i > 0; i--) {
      if (randomFirstNum % i === 0 && randomSecondNum % i === 0) {
        result = i;
        break;
      }
    }
  } else {
    for (let i = randomSecondNum; i > 0; i--) {
      if (randomFirstNum % i === 0 && randomSecondNum % i === 0) {
        result = i;
        break;
      }
    }
  }
  console.log(`Question: ${randomFirstNum} ${randomSecondNum}`);
  const answer = readlineSync.question('Your answer: ');
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
