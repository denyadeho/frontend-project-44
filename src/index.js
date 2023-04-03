import readlineSync from 'readline-sync';
import askUser from './cli.js';

export const generateRandomNum = (num = 101) => Math.floor(Math.random() * num);
export const getAnswer = () => readlineSync.question('Your answer: ');
export const base = (game, rule) => {
  const name = askUser();
  console.log(rule);
  for (let i = 0; i < 3; i += 1) {
    const [correctAnswer, question] = game();
    console.log(`Question: ${question}`);
    const answer = getAnswer();
    if (correctAnswer !== answer) {
      console.log(`'${answer}' is wrong answer ;(. Correct answer was '${correctAnswer}'.`);
      console.log(`Let's try again, ${name}!`);
      return;
    }
    console.log('Correct!');
  }
  console.log(`Congratulations, ${name}!`);
};
