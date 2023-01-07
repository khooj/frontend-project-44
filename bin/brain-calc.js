#!/usr/bin/env node

import { gameLogic } from '../src/logic.js';

const game = () => {
	let a = 0;
	let b = 0;
	let op = "*";
	let result = 0;

	gameLogic(
		`What is the result of the expression?`,
		() => {
			a = Math.floor(Math.random() * 30);
			b = Math.floor(Math.random() * 30);
			switch (Math.floor(Math.random() * 3)) {
				case 0:
					op = '+';
					result = a + b;
					break;
				case 1:
					op = '-';
					result = a - b;
					break;
				case 2:
					op = '*';
					result = a * b;
			}
			return `${a} ${op} ${b}`;
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