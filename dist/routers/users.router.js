"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userrouters = express_1.default.Router();
userrouters.post('/login', (req, res) => {
    res.send({ message: req === null || req === void 0 ? void 0 : req.method }).status(201);
});
userrouters.get('/login', (req, res) => {
    res.send({ message: req === null || req === void 0 ? void 0 : req.method }).status(201);
});
userrouters.post('/socialLogin', (req, res) => {
    res.send({ message: req === null || req === void 0 ? void 0 : req.method }).status(201);
});
userrouters.post('/updateProfile', (req, res) => {
    res.send({ message: req === null || req === void 0 ? void 0 : req.method }).status(201);
});
userrouters.post('/updatePhoto', (req, res) => {
    res.send({ message: req === null || req === void 0 ? void 0 : req.method }).status(201);
});
userrouters.post('/signup', (req, res) => {
    res.send({ message: req === null || req === void 0 ? void 0 : req.method }).status(201);
});
exports.default = userrouters;
//# sourceMappingURL=users.router.js.map