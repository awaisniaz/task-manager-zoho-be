"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
// *********************************************************
const users_router_1 = __importDefault(require("./routers/users.router"));
// *********************************************************
const app = (0, express_1.default)();
const PORT = process.env.PORT || 3000;
app.use('/user', users_router_1.default);
app.use((req, res, next) => {
    res.status(200).send({ message: 'Api is not Found found in system' });
});
app.listen(PORT, () => {
    console.log(`Hello World ❤️❤️❤️❤️❤️❤️❤️❤️}`);
});
//# sourceMappingURL=index.js.map