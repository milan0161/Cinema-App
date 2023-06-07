"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const class_validator_1 = require("class-validator");
const class_sanitizer_1 = require("class-sanitizer");
const class_transformer_1 = require("class-transformer");
const bad_request_1 = require("../errors/bad-request");
function dtoValidationMiddleware(type, skipMissingProperties = false) {
    return (req, res, next) => {
        const dto = (0, class_transformer_1.plainToInstance)(type, req.body);
        (0, class_validator_1.validate)(dto, { skipMissingProperties }).then((errors) => {
            if (errors.length > 0) {
                const dtoErrors = errors.map((error) => Object.values(error.constraints)).join(', ');
                next(new bad_request_1.BadRequestError(dtoErrors));
            }
            else {
                (0, class_sanitizer_1.sanitize)(dto);
                req.body = dto;
                next();
            }
        });
    };
}
exports.default = dtoValidationMiddleware;
