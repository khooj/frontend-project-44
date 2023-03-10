#!/usr/bin/env node

import { compareToNumber, gameLogic } from '../src/logic.js';

const generate = () => {
  const len = Math.floor(Math.random() * 5 + 5);
  const idx = Math.floor(Math.random() * len);
  let first = Math.floor(Math.random() * 10 + 1);
  const step = Math.floor(Math.random() * 5 + 1);
  const arr = [];
  for (let i = 0; i < len; i += 1) {
    arr.push(first);
    first += step;
  }

  return { i: idx, arr };
};

const game = () => {
  let idx = 0;
  let result = 0;

  gameLogic(
    'What number is missing in the progression?',
    () => {
      const { i, arr } = generate();
      idx = i;
      result = arr[idx];
      arr[idx] = '..';

      return arr.join(' ');
    },
    (ans) => compareToNumber(ans, result),
  );
};

game();
