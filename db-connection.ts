
import { Sequelize } from "sequelize"
export const sequelize = new Sequelize('task-manager-zoho', 'root', '', {
    host: '127.0.0.1',
    dialect: 'mysql'
},
)


const checkDBConnection = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
}
checkDBConnection()



