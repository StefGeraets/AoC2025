const first = (input: string) => {
  const [rawRanges, rawIds] = input.split('\n\n');

  const ranges = rawRanges!.split('\n').map((range) => {
    const [lower, upper] = range.split('-').map(Number);

    return { lower, upper };
  });
  const ids = rawIds!.split('\n').map(Number);

  let freshIngerdientIds = 0;

  for (const id of ids) {
    for (const { lower, upper } of ranges) {
      if (id >= lower! && id <= upper!) {
        freshIngerdientIds++;

        break;
      }
    }
  }
  

  return freshIngerdientIds;
};

const expectedFirstSolution = 3;

const second = (input: string) => {
  const [rawRanges, _] = input.split('\n\n');

  let ranges = rawRanges!
    .split('\n')
    .map((range) => {
      const [lower, upper] = range.split('-').map(Number);
      
      return { lower, upper };
    })
    .sort((a, b) => a.lower! - b.lower!) as Record<'lower' | 'upper', number>[];

  let i = 1;

  while (i < ranges.length) {

    if (
      ranges[i]!.lower >= ranges[i - 1]!.lower &&
      ranges[i]!.lower <= ranges[i - 1]!.upper
    ) {
      ranges[i - 1]!.upper = Math.max(
        ranges[i - 1]!.upper,
        ranges[i]!.upper
      );
      ranges = [...ranges.slice(0, i), ...ranges.slice(i + 1)];
    } else {
      i++;
    }
  }
  
  return ranges.reduce((a, c) => a + c.upper - c.lower + 1, 0);
};

const expectedSecondSolution = 14;

export { first, expectedFirstSolution, second, expectedSecondSolution };