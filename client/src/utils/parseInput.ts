// const input = `
// COR12345       3.5
// COR12346\t2
// COR12347    1
// `.trim(); // Make sure to trim leading/trailing whitespace

const parseInput = (input: string) => {
  const result = input
    .trim()
    .split(/\r?\n/) // Split into lines
    .map((row: string) => {
      const match = row.match(/^(\w+)\s+([\d.]+)$/);
      if (match) {
        const [, item_id, count] = match;
        return { item_id, count: parseFloat(count) };
      }
      return null; // or throw an error if needed
    })
    .filter(Boolean); // remove nulls

  return result;
};

export default parseInput;
