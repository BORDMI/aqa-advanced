class TodoService {
  async fetchTodo(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/todos/${id}`);
    return response.json();
  }
}

class UserService {
  async fetchUser(id) {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
    return response.json();
  }
}

const todoService = new TodoService();
const userService = new UserService();

const allResults = Promise.all([todoService.fetchTodo(1), userService.fetchUser(1)]);

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
