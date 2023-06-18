import { NextFunction, Request, Response } from 'express';
import 'dotenv/config';
declare const isAdmin: (req: Request, res: Response, next: NextFunction) => Promise<void>;
export default isAdmin;
