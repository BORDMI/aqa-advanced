class TodoService {
  async fetchTodo() {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
    return response.json();
  }
}

class UserService {
  async fetchUser() {
    const response = await fetch('https://jsonplaceholder.typicode.com/users/1');
    return response.json();
  }
}

const todoService = new TodoService();
const userService = new UserService();

const allResults = Promise.all([todoService.fetchTodo(), userService.fetchUser()]);

allResults
  .then((results) => {
    console.log('\nPromise.all results:');
    console.log('Todo:', results[0]);
    console.log('User:', results[1]);
  })
  .catch((error) => {
    console.error('Promise.all error:', error);
  });

const raceResult = Promise.race([todoService.fetchTodo(), userService.fetchUser()]);

raceResult
  .then((result) => {
    console.log('\nPromise.race result (fastest):');
    console.log(result);
  })
  .catch((error) => {
    console.error('Promise.race error:', error);
  });
