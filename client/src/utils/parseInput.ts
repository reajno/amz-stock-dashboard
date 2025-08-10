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
      return null; 
    })
    .filter(Boolean); // remove nulls

  return result;
};

export default parseInput;
