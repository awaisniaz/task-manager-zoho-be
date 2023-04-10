"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const sequelize_1 = require("sequelize");
const db_connection_1 = require("../db-connection");
const User = db_connection_1.sequelize === null || db_connection_1.sequelize === void 0 ? void 0 : db_connection_1.sequelize.define('User', {
    id: {
        type: sequelize_1.DataTypes === null || sequelize_1.DataTypes === void 0 ? void 0 : sequelize_1.DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: true
    },
    lastName: {
        type: sequelize_1.DataTypes === null || sequelize_1.DataTypes === void 0 ? void 0 : sequelize_1.DataTypes.STRING
    },
    email: {
        type: sequelize_1.DataTypes === null || sequelize_1.DataTypes === void 0 ? void 0 : sequelize_1.DataTypes.STRING,
        unique: true
    },
    password: {
        type: sequelize_1.DataTypes === null || sequelize_1.DataTypes === void 0 ? void 0 : sequelize_1.DataTypes.STRING
    },
    profilePhoto: {
        type: sequelize_1.DataTypes === null || sequelize_1.DataTypes === void 0 ? void 0 : sequelize_1.DataTypes.TEXT,
        defaultValue: null
    },
}, {
    timestamps: true
});
User.sync();
exports.default = User;
//# sourceMappingURL=user.model.js.map