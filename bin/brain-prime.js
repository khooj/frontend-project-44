#!/usr/bin/env node

import { gameLogic } from '../src/logic.js';

const isPrime = (num) => {
  for (let i = 2; i < num; i += 1) {
    if (num % i === 0) {
      return false;
    }
  }
  return true;
};

const game = () => {
  let a = 0;
  let result;

  gameLogic(
    'Answer "yes" if given number is prime. Otherwise answer "no".',
    () => {
      a = Math.floor(Math.random() * 100);
      result = isPrime(a);

      return a;
    },
    (ans) => {
      const correct = (result && ans === 'yes') || (!result && ans === 'no');
      const otherwise = result ? 'yes' : 'no';
      return {
        good: correct,
        otherwise,
      };
    },
  );
};

game();
