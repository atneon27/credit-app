import express from 'express';
import cors from 'cors';
import LoanRouter from './routes/loan.js';

const app = express();

app.use(cors());
app.use('/api/loan', LoanRouter)
 
app.listen(3000, () => {
  console.log('Example app listening on port 3000!');
});