#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askUser();
console.log('Answer "yes" if the number is even, otherwise answer "no".');
for (let i = 0; i < 3; i += 1) {
  const randomNum = Math.floor(Math.random() * 101);
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');
  if (randomNum % 2 === 0 && answer === 'yes') {
    console.log('Correct!');
  } else if (randomNum % 2 === 1 && answer === 'no') {
    console.log('Correct!');
  } else {
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}!`);
    break;
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
}
