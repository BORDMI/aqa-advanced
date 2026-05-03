function calculateAreaDeclaration(width, height) {
  return width * height;
}

const calculateAreaExpression = function (width, height) {
  return width * height;
};

const calculateAreaArrow = (width, height) => width * height;

console.log(calculateAreaDeclaration(5, 10));
console.log(calculateAreaExpression(5, 10));
console.log(calculateAreaArrow(5, 10));
