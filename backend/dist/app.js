"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const express_1 = __importDefault(require("express"));
const path_1 = __importDefault(require("path"));
const cors_1 = __importDefault(require("cors"));
const auth_routes_1 = __importDefault(require("./routes/auth.routes"));
const movie_routes_1 = __importDefault(require("./routes/movie.routes"));
const error_handler_1 = __importDefault(require("./middleware/error-handler"));
const multer_1 = __importDefault(require("multer"));
// import helmet from 'helmet';
const morgan_1 = __importDefault(require("morgan"));
const multer_config_1 = require("./utils/multer.config");
const hall_routes_1 = __importDefault(require("./routes/hall.routes"));
const projection_routes_1 = __importDefault(require("./routes/projection.routes"));
//App Variables
const PORT = process.env.PORT;
//App Configuration
const app = (0, express_1.default)();
//middlewares
app.use((0, cors_1.default)());
// app.use(
//   helmet({
//     crossOriginResourcePolicy: {
//       policy: 'cross-origin',
//     },
//   }),
// );
app.use(express_1.default.urlencoded({ extended: true }));
app.use(express_1.default.json());
app.use((0, morgan_1.default)('dev'));
app.use((0, multer_1.default)({ storage: multer_config_1.fileStorage, fileFilter: multer_config_1.fileFilter }).single('image'));
app.use('/public', express_1.default.static(path_1.default.join(__dirname, '..', '/public')));
//Routes
app.use('/api/v1', auth_routes_1.default);
app.use('/api/v1', movie_routes_1.default);
app.use('/api/v1', projection_routes_1.default);
app.use('/api/v1', hall_routes_1.default);
//errorhandler middleware
app.use(error_handler_1.default);
app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}...`);
});
