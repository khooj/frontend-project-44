#!/usr/bin/env node

import { gameLogic } from '../src/logic.js';

const game = () => {
	let idx = 0;
	let b = 0;
	let result = 0;

	gameLogic(
		`What number is missing in the progression?`,
		() => {
			const len = Math.floor(Math.random() * 5 + 5);
			idx = Math.floor(Math.random() * len);
			let first = Math.floor(Math.random() * 10 + 1);
			const step = Math.floor(Math.random() * 5 + 1);
			const arr = [];
			for (let i = 0; i < len; i++) {
				arr.push(first);
				first += step;
			}

			result = arr[idx];
			arr[idx] = '..';

			return arr.join(' ');
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