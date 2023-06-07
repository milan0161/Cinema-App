import { NextFunction, Request, Response } from 'express';
declare class AuthController {
    private authService;
    registerUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
    loginUser: (req: Request, res: Response, next: NextFunction) => Promise<void>;
}
export default AuthController;
