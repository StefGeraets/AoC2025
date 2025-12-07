import { sumReducer } from "../../utils/utils";

const first = (input: string) => {
  const rows = input.split('\n');
  const length = rows.length - 1;
  const operators = rows.pop()!.trim().split(/\s+/); 
  const numbers = rows.map(n => n.trim().split(/\s+/).map(Number));

  const turnedList: number[][] = []
  let currNumIndex = 0;

  while(currNumIndex < numbers[0]!.length) {
    let row: number[] = []
    for(let i = 0; i < length; i++) {
      row.push(numbers[i]![currNumIndex] as number);
    }

    turnedList.push(row);
    currNumIndex++
  }

  let total: number[] = [];

  turnedList.forEach((sumList, i) => {
    if(operators[i] === '*') {
      total.push(sumList.reduce((a, c) => a * c, 1));
      return
    }

    if(operators[i] === '+') {
      total.push(sumList.reduce((a, c) => a + c, 0));
      return
    }
  })

  return total.reduce(sumReducer);
};

const expectedFirstSolution = 4277556;

const second = (input: string) => {
  const rows = input.split('\n');
  const heightIndex = rows.length - 1;
  const lengthIndex = rows[0]!.length - 1;

  const turnedList: string[][] = []
  let currNumIndex = 0;
  
  while(currNumIndex <= heightIndex) {
    let row: string[] = []
    for(let i = lengthIndex; i >= 0; i--) {
      const val = rows[currNumIndex]![i] as string;
      row.push(val);
    }

    turnedList.push(row);
    currNumIndex++
  }

  const sumList: string[][] = [];
  
  let currentRow = 0;
  for(let i = 0; i <= lengthIndex; i++) {
    let num: string[] = [];

    while(currentRow <= heightIndex) {
      const val = turnedList[currentRow]![i] as string;
      num.push(val);
      
      currentRow++
    };

    sumList.push(num);
    currentRow = 0;
  }

  const total: number[] = [];

  let toCalc: number[] = [];
  sumList.forEach((column, i) => {

    const isEmptyCol = column.every(c => c === ' ');

    const operator = column.at(-1);

    if(isEmptyCol) {
      return;
    }

    if(!operator) {
      toCalc.push(Number(column.join('')))
    } else {
      let removedOp = [...column];
      removedOp.pop();
      toCalc.push(Number(removedOp.join('')));
    }

    if(operator === '*') {
      total.push(toCalc.reduce((a, c) => a * c, 1));
      toCalc = [];
    } else if (operator === '+') {
      total.push(toCalc.reduce((a, c) => a + c, 0));
      toCalc = [];
    }
  })

  return total.reduce(sumReducer);
};

const expectedSecondSolution = 3263827;

export { first, expectedFirstSolution, second, expectedSecondSolution };