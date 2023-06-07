"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
//App Variables
const PORT = process.env.PORT;
//App Configuration
const app = (0, express_1.default)();
//middlewares
app.use((0, cors_1.default)());
app.use(express_1.default.json());
//Routes
app.use('/api/v1', auth_routes_1.default);
//errorhandler middleware
app.use(error_handler_1.default);
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}...`);
});
