import { Router } from 'express';
import { remult } from 'remult';
import { api } from './api';

export const customApi = Router();
customApi.use(api.withRemult);

// Hello World
customApi.get('/hello', (req, res) => {
  if (remult.authenticated()) {
    console.log('Authenticated');
    res.json({ message: `Hello ${remult.user?.name}` });
  } else {
    console.log('Not Authenticated');
    res.json({ message: 'Hello World' });
  }
});
