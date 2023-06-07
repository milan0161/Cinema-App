import { StatusCodes } from 'http-status-codes';
import { CustomApiError } from './custom-error';
export class ForbiddenError extends CustomApiError {
  statusCode: StatusCodes;
  constructor(message: string) {
    super(message);
    this.statusCode = StatusCodes.FORBIDDEN;
  }
}
