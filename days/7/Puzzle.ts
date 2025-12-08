import { sumReducer } from "../../utils/utils";


const countSplits = (input: string) => {
  const lines = input.split('\n').map(l => l.split(''));
  const startIndex = lines[0]?.indexOf('S') as number;

  const SPLITTER = '^';

  const splits = Array(lines[0]?.length).fill(0);
  splits[startIndex] = 1;

  let totalSplits = 0;

  for( const line of lines) {
    for(let i = 0; i < line.length; i++) {
      if (!(line[i] === SPLITTER && splits[i])) continue;
      splits[i - 1] += splits[i];
      splits[i + 1] += splits[i];
      splits[i] = 0;
      totalSplits++
    }
  }

  return {
    totalSplits,
    splits,
  }
}

const first = (input: string) => {
  // const visualize: string[] = [];

  // lines.forEach((line, i) => {
  //   const newLine: string[] = [];
  //   line.forEach((l, j) => {
  //       newLine.push('.');
  //   })

  //   line.forEach((b, idx) => {
  //     if (currentLineBeamIndexes[i][idx]){
  //       newLine.splice(currentLineBeamIndexes[i][idx], 1, '|');
  //     }
  //   })

  //   const row = newLine.join('');
  //   visualize.push(row);
  // })
  
  return countSplits(input).totalSplits;
};

const expectedFirstSolution = 21;

const second = (input: string) => {
  return countSplits(input).splits.reduce(sumReducer);
};

const expectedSecondSolution = 40;

export { first, expectedFirstSolution, second, expectedSecondSolution };