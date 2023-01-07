#!/usr/bin/env node

import { compareToNumber, gameLogic } from '../src/logic.js';

const generateOp = (a, b) => {
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
			const k = generateOp(a, b);
			op = k.op;
			result = k.result;
			return `${a} ${op} ${b}`;
		},
		(ans) => compareToNumber(ans, result),
	);
};

game();