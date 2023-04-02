import readlineSync from 'readline-sync';

export const generateRandomNum = (num = 101) => Math.floor(Math.random() * num);

export const getAnswer = () => readlineSync.question('Your answer: ');
