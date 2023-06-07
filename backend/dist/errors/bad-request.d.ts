import { StatusCodes } from 'http-status-codes';
import { CustomApiError } from './custom-error';
export declare class BadRequestError extends CustomApiError {
    statusCode: StatusCodes;
    constructor(message: string);
}
