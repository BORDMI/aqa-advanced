const users = [
  { name: "Alice", email: "alice@example.com", age: 28 },
  { name: "Bob", email: "bob@example.com", age: 34 },
  { name: "Carol", email: "carol@example.com", age: 22 },
];

for (const { name, email, age } of users) {
  console.log(name, email, age);
}
