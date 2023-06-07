import { StatusCodes } from 'http-status-codes';
import { CustomApiError } from './custom-error';
export declare class NotFoundError extends CustomApiError {
    statusCode: StatusCodes;
    constructor(message: string);
}
