const person = {
  firstName: 'Anna',
  lastName: 'Smith',
  age: 30,
};

person.email = 'anna.smith@example.com';

delete person.age;

console.log(person);
