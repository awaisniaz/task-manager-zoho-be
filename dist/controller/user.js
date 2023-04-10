"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.user_controllers = void 0;
const user_model_1 = __importDefault(require("../Models/user.model"));
const utilities_1 = require("../utils/utilities");
exports.user_controllers = {
    register: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _a;
        user_model_1.default.findAll({
            where: {
                email: (_a = req === null || req === void 0 ? void 0 : req.body) === null || _a === void 0 ? void 0 : _a.email
            }
        }).then((data) => __awaiter(void 0, void 0, void 0, function* () {
            var _b;
            console.log(data);
            const encodedPassowrd = yield (utilities_1.utilities === null || utilities_1.utilities === void 0 ? void 0 : utilities_1.utilities.encodePassword((_b = req === null || req === void 0 ? void 0 : req.body) === null || _b === void 0 ? void 0 : _b.password));
            const newUser = yield user_model_1.default.create(Object.assign(Object.assign({}, req === null || req === void 0 ? void 0 : req.body), { password: encodedPassowrd }));
            delete newUser['password'];
            res.status(201).send({ data: newUser, message: "User Register Successfuly" });
        })).catch((err) => {
            console.log(err);
            res.status(201).send({ data: null, message: err === null || err === void 0 ? void 0 : err.message });
        });
    }),
    login: (req, res) => __awaiter(void 0, void 0, void 0, function* () {
        var _c;
        user_model_1.default === null || user_model_1.default === void 0 ? void 0 : user_model_1.default.findOne({
            where: {
                email: (_c = req === null || req === void 0 ? void 0 : req.body) === null || _c === void 0 ? void 0 : _c.email
            }
        }).then((data) => __awaiter(void 0, void 0, void 0, function* () {
            var _d;
            const validateUser = yield (utilities_1.utilities === null || utilities_1.utilities === void 0 ? void 0 : utilities_1.utilities.validatePassword((_d = req === null || req === void 0 ? void 0 : req.body) === null || _d === void 0 ? void 0 : _d.password, data === null || data === void 0 ? void 0 : data.password));
            if (validateUser) {
                const token = yield (utilities_1.utilities === null || utilities_1.utilities === void 0 ? void 0 : utilities_1.utilities.generateToken(data === null || data === void 0 ? void 0 : data.email));
                res.send({ message: "You are successfully Login", data: { data: data, token } });
            }
            else {
                res === null || res === void 0 ? void 0 : res.send({
                    message: "invalid credentials", data: null
                });
            }
        })).catch((err) => {
            res.status(200).send({ message: err === null || err === void 0 ? void 0 : err.message, data: null });
        });
        console.log(req === null || req === void 0 ? void 0 : req.body);
    }),
    updatePhoto: (req, res) => {
        console.log(req === null || req === void 0 ? void 0 : req.body);
    },
    socialLogin: (req, res) => {
        console.log(req === null || req === void 0 ? void 0 : req.body);
    },
    updateProfile: (req, res) => {
    }
};
//# sourceMappingURL=user.js.map