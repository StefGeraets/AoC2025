import { sumReducer } from "../../utils/utils";

const findJoltage = (line: string, digitsToKeep: number): number => {
  const toKeep: string[] = [];

  for (let i = 0; i < line.length; i++) {
    const digit = line[i];

    if (!digit) return 0;

    while (
      toKeep.length > 0 &&
      toKeep[toKeep.length - 1]! < digit &&
      line.length - i + toKeep.length > digitsToKeep
    ) {
      toKeep.pop();
    }

    if (toKeep.length < digitsToKeep) {
      toKeep.push(digit);
    }
  }

  return Number(toKeep.join(''));
}

const first = (input: string) => {
  const lines = input.split('\n');

  const joltages = lines.map((line) => findJoltage(line, 2));

  return joltages.reduce(sumReducer);
};

const expectedFirstSolution = 357;

const second = (input: string) => {
  const lines = input.split('\n');

  const joltages = lines.map((line) => findJoltage(line, 12));

  return joltages.reduce(sumReducer);
};

const expectedSecondSolution = 3121910778619;

export { first, expectedFirstSolution, second, expectedSecondSolution };