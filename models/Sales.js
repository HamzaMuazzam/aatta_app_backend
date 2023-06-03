import sequelize from "../db_config/db_config.js";
import {DataTypes} from "sequelize";
import User from "./user_models/users.js";


import {enums} from "../enums/common_enums.js";
import Stock from "./stock.js";





let Sales = sequelize.define('Sales',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        transactionType: {
            type : DataTypes.ENUM,
            values : Object.values(enums.transactionType),
        },
        quantity: DataTypes.INTEGER,
        amount: DataTypes.INTEGER,
        isPaid: DataTypes.BOOLEAN,

    },
    {
        timestamps: true
    }
);

User.hasMany(Sales, {
    foreignKey: 'saleBy'
});

Sales.belongsTo(User, {
    foreignKey: 'saleBy'
});

User.hasMany(Sales, {
    foreignKey: 'saleTo'
});

Sales.belongsTo(User, {
    foreignKey: 'saleTo'
});


Stock.hasMany(Sales, {
    foreignKey: 'stockId'
});

Sales.belongsTo(Stock, {
    foreignKey: 'stockId'
});

export default Sales;






