import { sumReducer } from "../../utils/utils";

const first = (input: string) => {
  const wharehouseGrid = input.split('\n').map((line) => line.split(''));

  let accessibleRolls = 0;

  const directions = [
    {dirRow: -1, dirCol: 0},
    {dirRow: -1, dirCol: 1},
    {dirRow: 0, dirCol: 1},
    {dirRow: 1, dirCol: 1},
    {dirRow: 1, dirCol: 0},
    {dirRow: 1, dirCol: -1},
    {dirRow: 0, dirCol: -1},
    {dirRow: -1, dirCol: -1},
  ]

  const countAdjacentRoles = (row: number, col: number): number => {
    let numAdjacentRolls = 0;

    for (const direction of directions) {
      const newRow = row + direction.dirRow;
      const newCol = col + direction.dirCol;

      if (
        newRow >= 0 &&
        newRow < wharehouseGrid.length &&
        newCol >= 0 &&
        newCol < wharehouseGrid[newRow]!.length
      ) {
        numAdjacentRolls += wharehouseGrid[newRow]![newCol] === '@' ? 1 : 0;
      }
    }

    return numAdjacentRolls;
  }

  for (let row = 0; row < wharehouseGrid.length; row++) {
    for (let col = 0; col < wharehouseGrid[row]!.length; col++) {
      if (wharehouseGrid[row]![col] === "@") {
        const adjacentRolls = countAdjacentRoles(row, col);

        accessibleRolls += adjacentRolls < 4 ? 1 : 0;
      }
    }
  }
  
  return accessibleRolls;
};

const expectedFirstSolution = 13;

const second = (input: string) => {
  const wharehouseGrid = input.split('\n').map((line) => line.split(''));

  let totalRemovedRolls: number = 0;
  let accessibleRolls;

  const directions = [
    {dirRow: -1, dirCol: 0},
    {dirRow: -1, dirCol: 1},
    {dirRow: 0, dirCol: 1},
    {dirRow: 1, dirCol: 1},
    {dirRow: 1, dirCol: 0},
    {dirRow: 1, dirCol: -1},
    {dirRow: 0, dirCol: -1},
    {dirRow: -1, dirCol: -1},
  ]

  const countAdjacentRoles = (row: number, col: number): number => {
    let numAdjacentRolls = 0;

    for (const direction of directions) {
      const newRow = row + direction.dirRow;
      const newCol = col + direction.dirCol;

      if (
        newRow >= 0 &&
        newRow < wharehouseGrid.length &&
        newCol >= 0 &&
        newCol < wharehouseGrid[newRow]!.length
      ) {
        numAdjacentRolls += wharehouseGrid[newRow]![newCol] === '@' ? 1 : 0;
      }
    }

    return numAdjacentRolls;
  }

  
  do {
    accessibleRolls = 0;
    const removableIndexes: { row: number, col: number }[] = [];
    
    for (let row = 0; row < wharehouseGrid.length; row++) {
      for (let col = 0; col < wharehouseGrid[row]!.length; col++) {
        if (wharehouseGrid[row]![col] === "@") {
          const adjacentRolls = countAdjacentRoles(row, col);
  
          if (adjacentRolls < 4) {
            accessibleRolls++;
  
            removableIndexes.push({row, col});
          }
        }
      }
    }

    totalRemovedRolls += accessibleRolls;

    for (const {row, col} of removableIndexes) {
      wharehouseGrid[row]![col] = "x";
    }

    
  } while (accessibleRolls);
  
  // console.log('\n\n', wharehouseGrid.map(row => row.join('')).join('\n'));
  return totalRemovedRolls;
};

const expectedSecondSolution = 43;

export { first, expectedFirstSolution, second, expectedSecondSolution };