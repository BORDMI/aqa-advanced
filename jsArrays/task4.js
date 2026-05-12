const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

const isEven = (number) => number % 2 === 0;

const evenNumbers = numbers.filter(isEven);

console.log(evenNumbers);