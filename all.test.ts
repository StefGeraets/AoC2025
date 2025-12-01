import * as fs from "node:fs";
import { expect, test, describe } from "bun:test";
import readFile from "./utils/readFile";
import type Puzzle from "./types/Puzzle.d.ts";

describe("AoC test runner", () => {
	const dirs = fs
		.readdirSync("./days", { withFileTypes: true })
		.filter((dirent) => dirent.isDirectory())
		.map((dirent) => dirent.name);

	for (const day of dirs) {
		test(`Tests day ${day}: both parts`, async () => {
			let inputPart1 = "";
			let inputPart2 = "";

			try {
				const puzzlePath = `days/${day}`;
				inputPart1 = await readFile(`${puzzlePath}/test-part1.txt`);
				inputPart2 = await readFile(`${puzzlePath}/test-part2.txt`);
			} catch (error) {
				console.error(error);
				process.exit(1);
			}
			const {
				first,
				expectedFirstSolution,
				second,
				expectedSecondSolution,
			}: Puzzle = await import(`./days/${day}/Puzzle`);

			expect(first(inputPart1)).toBe(expectedFirstSolution);
			expect(second(inputPart2)).toBe(expectedSecondSolution);
		});
	}
});
