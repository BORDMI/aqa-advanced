const number = 6;
const printLine = (i) => console.log(`${number} x ${i} = ${number * i}`);

for (let i = 1; i <= 10; i++) printLine(i);

console.log('--------------------------------');

let i = 1;
while (i <= 10) printLine(i++);
