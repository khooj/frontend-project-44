#!/usr/bin/env node

import readlineSync from 'readline-sync';
import { greetUser } from '../src/cli.js';

const game = () => {
	const name = greetUser();
	console.log(`Answer "yes" if the number is even, otherwise answer "no".`);

	for (let i = 0; i < 3; i++) {
		const n = Math.floor(Math.random() * 100);
		console.log(`Question: ${n}`);
		const ans = readlineSync.question("Your answer: ");
		const even = n % 2 == 0;
		const correct = (even && ans === "yes") || (!even && ans === "no");
		if (correct) {
			console.log("Correct!");
		} else {
			const otherwise = even ? "yes" : "no";
			console.log(`'${ans}' is wrong answer ;(. Correct answer was '${otherwise}'.`);
			console.log(`Let's try again, ${name}!`);
			return
		}
	}

	console.log(`Congratulations, ${name}`);
};

game();