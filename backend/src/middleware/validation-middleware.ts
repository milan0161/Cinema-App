import { validate, ValidationError } from 'class-validator';
import { RequestHandler } from 'express';
import { sanitize, Trim } from 'class-sanitizer';
import { plainToClass, plainToInstance } from 'class-transformer';
import { CustomApiError } from '../errors/custom-error';
import { BadRequestError } from '../errors/bad-request';

function dtoValidationMiddleware(type: any, skipMissingProperties = false): RequestHandler {
  return (req, res, next) => {
    const dto = plainToInstance(type, req.body);
    validate(dto, { skipMissingProperties }).then((errors: ValidationError[]) => {
      if (errors.length > 0) {
        const dtoErrors = errors.map((error: ValidationError) => (Object as any).values(error.constraints)).join(', ');
        next(new BadRequestError(dtoErrors));
      } else {
        sanitize(dto);
        req.body = dto;
        next();
      }
    });
  };
}
export default dtoValidationMiddleware;
