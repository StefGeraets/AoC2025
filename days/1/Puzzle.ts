const first = (input: string) => {
  const lines = input.trim().split("\n");
  const dirs = lines.map(l => ({ 
    dir: l.split(/\d/, 1).at(0),
    amt: Number(l.split(/L|R/).at(1))
  }))
  
  let pointer = 50;
  let isZero = 0;
  
  dirs.forEach((rotation) => {
    if (rotation.dir === "L") {
      pointer -= rotation.amt
    }

    if (rotation.dir === 'R') {
      pointer += rotation.amt
    }

    if (pointer % 100 === 0) {
      isZero++
    };
  })
  
  return isZero.toString();
};

const expectedFirstSolution = "3";

const second = (input: string) => {
  const lines = input.trim().split("\n");
  const dirs = lines.map(l => ({ 
    dir: l.split(/\d/, 1).at(0),
    amt: Number(l.split(/L|R/).at(1))
  }))
  
  let pointer = 50;
  let isZero = 0;

  dirs.forEach((rotation) => {
    if (rotation.dir === 'L') {
      let n = 0;
      while(n < rotation.amt) {
        pointer--;
        if (pointer % 100 === 0) {
          isZero++
        }
        n++
      }
    }

    if (rotation.dir === 'R') {
      let n = 0;
      while(n < rotation.amt) {
        pointer++;
        if (pointer % 100 === 0) {
          isZero++
        }
        n++
      }
    }
  });

  return isZero.toString();
};

const expectedSecondSolution = "6";

export { first, expectedFirstSolution, second, expectedSecondSolution };