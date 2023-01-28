#!/usr/bin/env node
import readlineSync from 'readline-sync';
import askUser from '../src/cli.js';

console.log('Welcome to the Brain Games!');
const name = askUser();
console.log('Answer "yes" if the number is prime. Otherwise answer "no".');

for (let i = 0; i < 3; i++) {
  const randomNum = Math.floor(Math.random() * 101);
  console.log(`Question: ${randomNum}`);
  const answer = readlineSync.question('Your answer: ');

  const isPrime = (numb) => {
    let count = 0;
    for (let j = 1; j <= numb; j++) {
      if (numb % j === 0) {
        count += 1;
      }
    }
    if (count === 2) {
      return 'yes';
    }
    return 'no';
  };

  if (answer === isPrime(randomNum)) {
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
