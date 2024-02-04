const numbers = Array.from(Array(6), (_, index) => (index += 1));

const images = numbers.map((value) => `/${value}.png`);

export { images };
