import * as fs from "node:fs";
import { expect, test, describe } from "bun:test";
import readFile from "./utils/readFile";
import type Puzzle from "./types/Puzzle.d.ts";

describe("AoC test runner", () => {
	const dirs = fs
		.readdirSync("./days", { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);

	const lastDay = dirs.at(-1);

	test(`Tests day ${lastDay}: part 1`, async () => {
		let input = "";

		try {
			const puzzlePath = `days/${lastDay}`;
			input = await readFile(`${puzzlePath}/test-part1.txt`);
		} catch (error) {
			console.error(error);
			process.exit(1);
		}

		const {
			first,
			expectedFirstSolution,
			second,
			expectedSecondSolution,
		}: Puzzle = await import(`./days/${lastDay}/Puzzle`);

		expect(first(input)).toBe(expectedFirstSolution);
	});

	test(`Tests day ${lastDay}: part 2`, async () => {
		let input = "";

		try {
			const puzzlePath = `days/${lastDay}`;
			input = await readFile(`${puzzlePath}/test-part2.txt`);
		} catch (error) {
			console.error(error);
			process.exit(1);
		}

		const {
			first,
			expectedFirstSolution,
			second,
			expectedSecondSolution,
		}: Puzzle = await import(`./days/${lastDay}/Puzzle`);

		expect(second(input)).toBe(expectedSecondSolution);
	});
	// for (const day of dirs) {
	// 	it(`Tests day ${day}`, async () => {
	// 		let input = "";
	// 		const puzzleName = day;
	// 		try {
	// 			const puzzlePath = `src/days/${puzzleName}`;
	// 			input = await readFile(`${puzzlePath}/test.txt`);
	// 		} catch (error) {
	// 			console.error(error);
	// 			process.exit(1);
	// 		}
	// 		const {
	// 			first,
	// 			expectedFirstSolution,
	// 			second,
	// 			expectedSecondSolution,
	// 		}: Puzzle = await import(`./days/${puzzleName}/Puzzle`);

	// 		expect(first(input)).toBe(expectedFirstSolution);
	// 		expect(second(input)).toBe(expectedSecondSolution);
	// 	});
	// }
});
