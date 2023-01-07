#!/usr/bin/env node

import { gameLogic } from '../src/logic.js';

const generateOp = () => {
	let op;
	let result;
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
	return { op, result };
};

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
			const k = generateOp();
			op, result = k.op, k.result;
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