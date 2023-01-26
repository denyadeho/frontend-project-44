import readlineSync from 'readline-sync';
import askUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askUser();
console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < 3; i++) {
  const randomNum = Math.floor(Math.random() * 101);
  const randomNum1 = Math.floor(Math.random() * 101);

  let result = 0;
  if (randomNum > randomNum1) {
    for (let i = randomNum; i > 0; i--) {
      if (randomNum % i === 0 && randomNum1 % i === 0) {
        result = i;
        break;
      }
    }
  } else {
    for (let i = randomNum1; i > 0; i--) {
      if (randomNum % i === 0 && randomNum1 % i === 0) {
        result = i;
        break;
      }
    }
  }
  console.log(`Question: ${randomNum} ${randomNum1}`);
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
