import sql from 'sequelize';
import dotenv from "dotenv";

dotenv.config();


const sequelize = new sql.Sequelize(
    `${process.env.DATABASE_NAME}`,
    `${process.env.USER_NAME}`,
    // `${process.env.PASSWORD}`,
    {
        host: `${process.env.HOST}`,
        dialect: `${process.env.DIALECT}`,
        define: {
            engine: 'InnoDB',
            // charset: 'utf8',
            // collate: 'utf8_general_ci',
            // timestamps: true
        },

        // logging: false
    });


try {
    await sequelize.authenticate();

    console.log('DB Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', `${error}`.bgRed);
}


export default sequelize;