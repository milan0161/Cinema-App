"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.clearImage = void 0;
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const clearImage = (filePath) => {
    filePath = path_1.default.join(__dirname, '..', '..', filePath);
    fs_1.default.unlink(filePath, (error) => {
        return error;
    });
};
exports.clearImage = clearImage;
