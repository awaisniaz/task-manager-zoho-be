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
exports.utilities = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
exports.utilities = {
    encodePassword: (pass) => __awaiter(void 0, void 0, void 0, function* () {
        const hash = yield bcrypt_1.default.hash(pass, 10);
        return hash;
    }),
    validatePassword: (pass, hash) => __awaiter(void 0, void 0, void 0, function* () {
        const result = yield bcrypt_1.default.compare(pass, hash);
        return result;
    }),
    generateToken: (email) => __awaiter(void 0, void 0, void 0, function* () {
        const token = yield jsonwebtoken_1.default.sign({
            data: email
        }, 'zoho-manager', { expiresIn: 60 });
        return token;
    })
};
//# sourceMappingURL=utilities.js.map