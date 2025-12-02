import { sumReducer } from "../../utils/utils";

const first = (input: string) => {
  const pairs = input.split(',');
  const parisList = pairs.map(p => p.split('-').map(Number));

  let invalidIds: number[] = [];

  parisList.forEach((pair) => {
    let firstInPair = pair.at(0)?.toString();
    let secondInPair = pair.at(1)?.toString();
    let i = Number(firstInPair)

    for(i; i < Number(secondInPair) + 1; i++) {
      const numberLgth = i.toString().length;
      if (numberLgth % 2 !== 0) {      
        continue;
      }
      const splitAmount = numberLgth / 2;
      
      const firstHalf = i.toString().slice(0, splitAmount);
      const secondHalf = i.toString().slice(splitAmount, numberLgth);

      if (firstHalf === secondHalf) {
        invalidIds.push(i);
      }
    }
  })
  
  const result = invalidIds.reduce(sumReducer);

  return result;
};

const expectedFirstSolution = 1227775554;

const second = (input: string) => {
  const pairs = input.split(',');
  const parisList = pairs.map(p => p.split('-').map(Number));

  let invalidIds: number[] = [];

  parisList.forEach((pair) => {
    let firstInPair = pair.at(0)?.toString();
    let secondInPair = pair.at(1)?.toString();
    let i = Number(firstInPair)

    for(i; i <= Number(secondInPair); i++) {
      const numberLgth = i.toString().length;
      const splitAmount = numberLgth / 2;
      
      for(let l = 1; l <= splitAmount; l++) {
        const firstHalf = i.toString().slice(0, l);
        let repeated = true;
        
        for (let pos = l; pos < numberLgth; pos += l) {
          if(String(i).slice(pos, pos + l) !== firstHalf) {
            repeated = false;
            break;
          }
        }

        if (repeated) {
          invalidIds.push(i);
          break;
        }
      }
      
      
    }
  })

  const result = invalidIds.reduce(sumReducer);
  return result;
};

const expectedSecondSolution = 4174379265;

export { first, expectedFirstSolution, second, expectedSecondSolution };