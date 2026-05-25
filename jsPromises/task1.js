function printAfterDelay(text, ms) {
  setTimeout(() => console.log(text), ms);
}

printAfterDelay('Повідомлення через 1 секунду', 1000);
printAfterDelay('Повідомлення через 2 секунди', 2000);
printAfterDelay('Повідомлення через 500мс', 500);
