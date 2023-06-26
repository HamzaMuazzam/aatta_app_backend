import sql from 'sequelize';
import dotenv from "dotenv";

dotenv.config();


const sequelize = new sql.Sequelize({
        database:`${process.env.DATABASE_NAME}`,
    username:`${process.env.USER_NAME}`,
    dialect: `${process.env.DIALECT}`,
    host: `${process.env.HOST}`,
    password: `${process.env.PASSWORD}`,
    options:{
        define: {
            engine: 'InnoDB',
            // charset: 'utf8',
            // collate: 'utf8_general_ci',
            // timestamps: true
        },

        // logging: false
    }
});


try {
    await sequelize.authenticate();

    console.log('DB Connection has been established successfully.');
} catch (error) {
    console.error('Unable to connect to the database:', `${error}`.bgRed);
}


export default sequelize;