#!/usr/bin/env node

import { gameLogic, compareToNumber } from '../src/logic.js';

const gcd = (a, b) => {
  const asd = a > b ? { max: a, min: b } : { max: b, min: a };
  const { max, min } = asd;
  for (let i = max; i >= min; i -= 1) {
    if (a % i === 0 && b % i === 0) {
      return i;
    }
  }
  return -1;
};

const game = () => {
  let a = 0;
  let b = 0;
  let result = 0;

  gameLogic(
    'Find the greatest common divisor of given numbers.',
    () => {
      do {
        a = Math.floor(Math.random() * 100 + 1);
        b = Math.floor(Math.random() * 100 + 1);
        result = gcd(a, b);
      } while (result === -1);
      return `${a} ${b}`;
    },
    (ans) => compareToNumber(ans, result),
  );
};

game();
