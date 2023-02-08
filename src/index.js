import askUser from "./cli.js";
import readlineSync from "readline-sync";

console.log('Welcome to the Brain Games!');
const name = askUser();
for (let i = 0; i < 3; i++) {
  const answer = readlineSync.question('Your answer: ');
  console.log('Correct!');
    console.log("'yes' is wrong answer ;(. Correct answer was 'no'.");
    console.log(`Let's try again, ${name}!`);
  }
  if (i === 2) {
    console.log(`Congratulations, ${name}!`);
  }
  

console.log('Welcome to the Brain Games!');
const name = askUser();
console.log('What is the result of the expression?');