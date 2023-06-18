import { Request, Response, NextFunction } from 'express';
import Errors from '../errors/index';
import { StatusCodes } from 'http-status-codes';

const errorHandlerMiddleware = (error: Error, req: Request, res: Response, next: NextFunction) => {
  if (error instanceof Errors.UnauthenticatedError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  if (error instanceof Errors.BadRequestError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  if (error instanceof Errors.NotFoundError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  if (error instanceof Errors.ForbiddenError) {
    return res.status(error.statusCode).json({ message: error.message });
  }
  return res.status(StatusCodes.INTERNAL_SERVER_ERROR).json({
    message: error.message
    
    // 'Something went wrong, please try again later',
  });
};

export default errorHandlerMiddleware;
