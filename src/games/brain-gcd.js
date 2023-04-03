import { generateRandomNum, base } from '../index.js';

const rule = 'Find the greatest common divisor of given numbers.';

const gameGcd = () => {
  const randomFirstNum = generateRandomNum();
  const randomSecondNum = generateRandomNum();

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
  const question = `${randomFirstNum} ${randomSecondNum}`;
  return [result.toString(), question];
}
const brainGcd = () => {
  base(gameGcd, rule);
};
export default brainGcd;
