import { NextFunction, Request, Response } from 'express';
import AuthService from '../services/auth.service';
declare class AuthController {
    authService: AuthService;
    registerUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    loginUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default AuthController;
