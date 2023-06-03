import sequelize from "../db_config/db_config.js";
import {DataTypes} from "sequelize";
import User from "./user_models/users.js";
import {enums} from "../enums/common_enums.js";


let Expenses = sequelize.define('expenses',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        amount: DataTypes.INTEGER,
        expenseType: {
            type : DataTypes.ENUM,
            values : Object.values(enums.expenseType),
        },
    },
    {
        timestamps: true
    }
);

User.hasMany(Expenses, {
    foreignKey: 'paidTo'
});

Expenses.belongsTo(User, {
    foreignKey: 'paidTo'
});


export default Expenses;






