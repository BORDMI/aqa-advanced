const checkOrder = (available, ordered) => {
  if (ordered === 0) return "Your order is empty";
  if (available < ordered) return "Your order is too large, we don't have enough goods.";
  return "Your order is accepted";
};

console.log(checkOrder(10, 5));
console.log(checkOrder(3, 10));
console.log(checkOrder(5, 0));
