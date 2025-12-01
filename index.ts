import type Puzzle from "./types/Puzzle.d.ts";
import readFile from "./utils/readFile.ts";
import chalk from "chalk";

const args = process.argv.slice(2);
const dayToSolve = args[0];

const log = console.log;

if (!dayToSolve) {
	log(
		`${chalk.red.bold("ERROR:")} ${chalk.red("No day specified!")} \n\nYou forgot to add a day number to the command\ne.g: ${chalk.green("bun run dev {dayNumber}")}`,
	);
	process.exit();
}
log(`\n${chalk.bold(`Solving Day #${args[0]}`)}\n`);
(async () => {
	let input = "";
	const puzzleName = args[0];
	try {
		const puzzlePath = `days/${puzzleName}`;
		input = await readFile(`${puzzlePath}/input.txt`);
	} catch (error) {
		console.log(error);
		process.exit(1);
	}
	const { first, second }: Puzzle = await import(`./days/${puzzleName}/Puzzle`);

	log(chalk.blue("Answer part 1: "), chalk.green(first(input)));
	log(chalk.blue("Answer part 2: "), chalk.green(second(input)));
})();
