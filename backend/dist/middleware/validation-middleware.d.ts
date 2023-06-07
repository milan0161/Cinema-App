import { RequestHandler } from 'express';
declare function dtoValidationMiddleware(type: any, skipMissingProperties?: boolean): RequestHandler;
export default dtoValidationMiddleware;
