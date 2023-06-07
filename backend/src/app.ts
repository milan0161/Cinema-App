import 'dotenv/config';
import express, { Express } from 'express';
import cors from 'cors';
import authRouter from './routes/auth.routes';
import errorHandlerMiddleware from './middleware/error-handler';

//App Variables
const PORT = process.env.PORT;

//App Configuration
const app: Express = express();

//middlewares
app.use(cors());
app.use(express.json());

//Routes

app.use('/api/v1', authRouter);

//errorhandler middleware
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}...`);
});
