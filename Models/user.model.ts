import { DataTypes } from "sequelize";
import { sequelize } from '../db-connection'
const User = sequelize?.define('User', {
    id: {
        type: DataTypes?.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    firstName: {
        type: DataTypes.STRING,
        allowNull: true
    },
    lastName: {
        type: DataTypes?.STRING
    },
    email: {
        type: DataTypes?.STRING,
        unique: true
    },
    password: {
        type: DataTypes?.STRING
    },
    profilePhoto: {
        type: DataTypes?.TEXT,
        defaultValue: null
    },


}, {
    timestamps: true
})

User.sync()

export default User