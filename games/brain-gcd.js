#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askUser();
console.log('Find the greatest common divisor of given numbers.');

for (let i = 0; i < 3; i += 1) {
  const randomFirstNum = Math.floor(Math.random() * 101);
  const randomSecondNum = Math.floor(Math.random() * 101);

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
