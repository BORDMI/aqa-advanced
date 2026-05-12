const handleEven = () => console.log("number is even");

const handleOdd = () => console.log("number is odd");

function handleNum(num, evenCallback, oddCallback) {
  if (num % 2 === 0) evenCallback(); 
  else oddCallback();
}

handleNum(4, handleEven, handleOdd);
handleNum(7, handleEven, handleOdd);
