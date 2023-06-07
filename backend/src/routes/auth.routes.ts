import { Router } from 'express';
import AuthController from '../controllers/auth.controller';
import dtoValidationMiddleware from '../middleware/validation-middleware';
import { AuthDto } from '../dto/auth.dto';

const authRouter = Router();
const authControler = new AuthController();

authRouter.post('/auth/register', dtoValidationMiddleware(AuthDto), authControler.registerUser);

authRouter.post('/auth/login', authControler.loginUser);

export default authRouter;
