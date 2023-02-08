import readlineSync from 'readline-sync';
import askUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askUser();
console.log('What is the result of the expression?');

for (let i = 0; i < 3; i += 1) {
  const randomNum = Math.floor(Math.random() * 101);
  const randomNum1 = Math.floor(Math.random() * 101);
  const random = Math.floor(Math.random() * 3);
  let result = 0;
  let operator = '';

  switch (random) {
    case 0:
      operator = '+';
      result = randomNum + randomNum1;
      break;
    case 1:
      operator = '-';
      result = randomNum - randomNum1;
      break;
    case 2:
      operator = '*';
      result = randomNum * randomNum1;
      break;
    default:
      break;
  }
  console.log(`Question: ${randomNum} ${operator} ${randomNum1}`);
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
