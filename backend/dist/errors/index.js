"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const bad_request_1 = require("./bad-request");
const forbidden_error_1 = require("./forbidden-error");
const not_found_1 = require("./not-found");
const unauthenticated_error_1 = require("./unauthenticated-error");
exports.default = {
    BadRequestError: bad_request_1.BadRequestError,
    ForbiddenError: forbidden_error_1.ForbiddenError,
    NotFoundError: not_found_1.NotFoundError,
    UnauthenticatedError: unauthenticated_error_1.UnauthenticatedError,
};
