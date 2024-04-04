export const getRandomArrayElements = <T>(
  arr?: T[],
  numberOfElements?: number,
): T[] => {
  if (!arr) {
    return [];
  }

  const result = new Set();

  const amountOfRandomElements = Math.min(
    numberOfElements || arr.length,
    arr.length,
  );

  if (amountOfRandomElements === arr.length) {
    return arr;
  }

  while (result.size < amountOfRandomElements) {
    const index = Math.floor(Math.random() * arr.length);
    result.add(arr[index]);
  }

  return Array.from(result) as T[];
};

export const waitFor = (ms: number) =>
  new Promise(resolve => {
    setTimeout(resolve, ms);
  });
