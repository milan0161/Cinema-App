import { Request, Response } from 'express';
import UsersService from '../services/users.service';
declare class UsersController {
    usersService: UsersService;
    registerUser: (req: Request, res: Response) => Promise<void>;
    loginUser: (req: Request, res: Response) => Promise<void>;
}
export default UsersController;
