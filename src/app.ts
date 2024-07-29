import express from 'express';
import route from './routes/main';

const app = express();
const port = 3000;

app.use(express.json());

app.use('/users', route);

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
