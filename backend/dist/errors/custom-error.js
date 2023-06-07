"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomApiError = void 0;
class CustomApiError extends Error {
    constructor(message) {
        super(message);
    }
}
exports.CustomApiError = CustomApiError;
