import { NextFunction, Request, Response } from 'express';
import { ForbiddenError } from '../errors/forbidden-error';
import jwt from 'jsonwebtoken';
import 'dotenv/config';
import { error } from 'console';
// declare module 'express-serve-static-core' {
//     interface Request{
//         id: string
//     }
// }
const aTokenSecret = process.env.A_TOKEN_SECRET;

const isAdmin = async (req: Request, res: Response, next: NextFunction): Promise<void> => {
  try {
    const authHeader = req.get('Authorization');
    if (!authHeader) {
      throw new ForbiddenError('Not Authorized');
    }
    if (authHeader.split(' ')[0] !== 'Bearer') {
      throw new ForbiddenError('Not Authorized');
    }
    jwt.verify(authHeader.split(' ')[1], aTokenSecret!, (error, payload: any) => {
      if (error) {
        throw new ForbiddenError(error.message);
      }
      if (payload.role !== 'ADMIN') {
        throw new ForbiddenError('Not Authorized');
      }
    });
    next();
  } catch (error) {
    next(error);
  }
};

export default isAdmin;
