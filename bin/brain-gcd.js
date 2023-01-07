#!/usr/bin/env node

import { gameLogic } from '../src/logic.js';

const gcd = (a, b) => {
	const { max, min } = a > b ? { a, b } : { b, a };
	for (let i = max; i >= min; i--) {
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
		`Find the greatest common divisor of given numbers.`,
		() => {
			do {
				a = Math.floor(Math.random() * 100 + 1);
				b = Math.floor(Math.random() * 100 + 1);
				result = gcd(a, b);
			} while (result === -1);
			return `${a} ${b}`;
		},
		(ans) => {
			const num = Number(ans);
			const correct = num == result;
			const otherwise = result;
			return {
				good: correct,
				otherwise: otherwise,
			}
		}
	);
};

game();