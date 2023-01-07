#!/usr/bin/env node

import { gameLogic } from '../src/logic.js';

const game = () => {
  let n = 0;

  gameLogic(
    'Answer "yes" if the number is even, otherwise answer "no".',
    () => {
      n = Math.floor(Math.random() * 100);
      return n;
    },
    (ans) => {
      const even = n % 2 === 0;
      const correct = (even && ans === 'yes') || (!even && ans === 'no');
      const otherwise = even ? 'yes' : 'no';
      return {
        good: correct,
        otherwise,
      };
    },
  );
};

game();
