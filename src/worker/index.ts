import fetch from 'node-fetch';
import { Task } from '../demo/todo/Task';
import { remult, repo } from 'remult';

async function fetchHelloWorld() {
  try {
    // Example of using fetch from within the worker on an API route which needs authorization
    const response = await fetch('http://localhost:6004/hello');
    const data = await response.json();
    console.log(data?.message);

    // Example of using remult from within the worker
    if (remult.authenticated()) {
      console.log("Authenticated user:", remult.user, "Fetching tasks...");
      const tasks = await repo(Task).find();
      console.log(tasks);

    }
  } catch (error) {
    console.error('Error fetching Hello World message:', error);
  }
}

// ----------- HERE -----------
// TODO: Perform authentication!
// ----------- HERE -----------

setInterval(fetchHelloWorld, 10000); // Fetch every 10 seconds
