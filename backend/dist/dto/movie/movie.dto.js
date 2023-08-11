"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.ReqMovieDto = void 0;
const class_sanitizer_1 = require("class-sanitizer");
const class_validator_1 = require("class-validator");
let req;
class ReqMovieDto {
    title;
    genre;
    year;
    actors;
    director;
    duration;
    description;
    image;
}
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Title must be provided' }),
    (0, class_validator_1.IsString)(),
    (0, class_sanitizer_1.Trim)(),
    __metadata("design:type", String)
], ReqMovieDto.prototype, "title", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Genre must be provided' }),
    (0, class_validator_1.IsString)(),
    (0, class_sanitizer_1.Trim)(),
    __metadata("design:type", String)
], ReqMovieDto.prototype, "genre", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Year must be provided' })
    // @IsNumber()
    ,
    (0, class_sanitizer_1.Trim)(),
    __metadata("design:type", Number)
], ReqMovieDto.prototype, "year", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Actors must be provided' }),
    (0, class_validator_1.IsString)(),
    (0, class_sanitizer_1.Trim)(),
    __metadata("design:type", String)
], ReqMovieDto.prototype, "actors", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Director must be provided' }),
    (0, class_validator_1.IsString)(),
    (0, class_sanitizer_1.Trim)(),
    __metadata("design:type", String)
], ReqMovieDto.prototype, "director", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)(),
    (0, class_sanitizer_1.Trim)(),
    __metadata("design:type", Number)
], ReqMovieDto.prototype, "duration", void 0);
__decorate([
    (0, class_validator_1.IsNotEmpty)({ message: 'Description must be provided' }),
    (0, class_validator_1.IsString)(),
    (0, class_sanitizer_1.Trim)(),
    __metadata("design:type", String)
], ReqMovieDto.prototype, "description", void 0);
exports.ReqMovieDto = ReqMovieDto;
