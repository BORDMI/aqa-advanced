function countdown(num) {
  if (num <= 0) return;
  console.log(num);
  countdown(--num);
}

countdown(5);
