import 'dotenv/config';
import express, { Express } from 'express';
import path from 'path';
import cors from 'cors';
import authRouter from './routes/auth.routes';
import movieRouter from './routes/movie.routes';
import errorHandlerMiddleware from './middleware/error-handler';
import multer from 'multer';
// import helmet from 'helmet';
import morgan from 'morgan';
import { fileFilter, fileStorage } from './utils/multer.config';
import hallRouter from './routes/hall.routes';
import projectionRouter from './routes/projection.routes';

//App Variables
const PORT = process.env.PORT;

//App Configuration
const app: Express = express();

//middlewares
app.use(cors());
// app.use(
//   helmet({
//     crossOriginResourcePolicy: {
//       policy: 'cross-origin',
//     },
//   }),
// );
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(morgan('dev'));
app.use(multer({ storage: fileStorage, fileFilter: fileFilter }).single('image'));
app.use('/public', express.static(path.join(__dirname, '..', '/public')));
//Routes

app.use('/api/v1', authRouter);
app.use('/api/v1', movieRouter);
app.use('/api/v1', projectionRouter);
app.use('/api/v1', hallRouter);

//errorhandler middleware
app.use(errorHandlerMiddleware);

app.listen(PORT, () => {
  console.log(`Server is listening on ${PORT}...`);
});
