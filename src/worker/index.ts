import fetch from 'node-fetch';
import { Task } from '../demo/todo/Task';
import { remult, repo } from 'remult';

remult.apiClient.url = 'http://localhost:6004/api'
// @ts-ignore
remult.apiClient.httpClient = (info, init) => {
  const initToUse = init || {}
  initToUse.headers = {
    ...initToUse.headers,
    "my-worker-token": 'Jane___Jane123'
  }
  // @ts-ignore
  return fetch(info, initToUse)
}

async function fetchHelloWorld() {
  try {
    // Example of using fetch from within the worker on an API route which needs authorization
    const response = await fetch('http://localhost:6004/hello');
    const data = await response.json();
    console.log(data?.message);

    const whoAmI = await remult.initUser()
    console.log(`whoAmI`, whoAmI)


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

fetchHelloWorld()
// setInterval(fetchHelloWorld, 10000); // Fetch every 10 seconds
