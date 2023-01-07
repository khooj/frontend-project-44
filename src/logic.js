import { greetUser } from "./cli.js";
import readlineSync from 'readline-sync';

export const gameLogic = (greeting, generateQuestion, checkAnswer) => {
	const name = greetUser();
	console.log(greeting);

	for (let i = 0; i < 3; i++) {
		const question = generateQuestion();
		console.log(`Question: ${question}`);
		const a = readlineSync.question("Your answer: ");
		const ans = checkAnswer(a);
		if (ans.good) {
			console.log("Correct!");
		} else {
			console.log(`'${a}' is wrong answer ;(. Correct answer was '${ans.otherwise}'.`);
			console.log(`Let's try again, ${name}!`);
			return
		}
	}

	console.log(`Congratulations, ${name}!`);
};

export const compareToNumber = (ans) => {
	const num = Number(ans);
	const correct = num == result;
	const otherwise = result;
	return {
		good: correct,
		otherwise: otherwise,
	};
};