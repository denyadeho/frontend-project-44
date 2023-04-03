import { generateRandomNum, base } from '../index.js';

const rule = 'What number is missing in the progression?';

const gameProgression = () => {
  const randomStartNumber = generateRandomNum();
  const randomProgressionNumber = generateRandomNum(11);
  const randomNumOfCycle = Math.floor(Math.random() * (10 - 4) + 4);
  const result = [];
  let temp = randomStartNumber;
  result.push(temp);

  for (let j = 0; j < randomNumOfCycle; j += 1) {
    temp += randomProgressionNumber;
    result.push(temp);
  }

  const lengthOfArr = result.length - 1;
  const randomNumHide = generateRandomNum(lengthOfArr);
  const neededNumb = result[randomNumHide];
  result[randomNumHide] = '..';

  const textForQuestion = result.join(' ');
  const question = `${textForQuestion}`;

  return [neededNumb.toString(), question];
};
const brainProgression = () => {
  base(gameProgression, rule);
};
export default brainProgression;
