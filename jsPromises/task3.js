async function fetchTodo() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
  return response.json();
}

async function fetchUser() {
  const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
  return response.json();
}

const allResults = Promise.all([fetchTodo(), fetchUser()]);

allResults
  .then((results) => {
    console.log('\nPromise.all results:');
    console.log('Todo:', results[0]);
    console.log('User:', results[1]);
  })
  .catch((error) => {
    console.error('Promise.all error:', error);
  });

const raceResult = Promise.race([fetchTodo(), fetchUser()]);

raceResult
  .then((result) => {
    console.log('\nPromise.race result (fastest):');
    console.log(result);
  })
  .catch((error) => {
    console.error('Promise.race error:', error);
  });
