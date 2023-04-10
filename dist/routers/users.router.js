"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const user_1 = require("../controller/user");
const userrouters = express_1.default.Router();
userrouters.post('/login', user_1.user_controllers === null || user_1.user_controllers === void 0 ? void 0 : user_1.user_controllers.login);
userrouters.get('/login', user_1.user_controllers === null || user_1.user_controllers === void 0 ? void 0 : user_1.user_controllers.login);
userrouters.post('/socialLogin', user_1.user_controllers === null || user_1.user_controllers === void 0 ? void 0 : user_1.user_controllers.socialLogin);
userrouters.post('/updateProfile', user_1.user_controllers === null || user_1.user_controllers === void 0 ? void 0 : user_1.user_controllers.updateProfile);
userrouters.post('/updatePhoto', user_1.user_controllers === null || user_1.user_controllers === void 0 ? void 0 : user_1.user_controllers.updatePhoto);
userrouters.post('/signup', user_1.user_controllers === null || user_1.user_controllers === void 0 ? void 0 : user_1.user_controllers.register);
exports.default = userrouters;
//# sourceMappingURL=users.router.js.map