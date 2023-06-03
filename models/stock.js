import sequelize from "../db_config/db_config.js";
import {DataTypes} from "sequelize";
import User from "./user_models/users.js";
import {enums} from "../enums/common_enums.js";






let Stock = sequelize.define('stocks',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        quantity: DataTypes.STRING(255),
        remainingQuantity: DataTypes.STRING(255),
        purchaseUnitPrice: DataTypes.STRING(255),
        saleUnitPrice: DataTypes.STRING(255),
        balance: DataTypes.INTEGER,
        stockWeight: {
            type : DataTypes.ENUM,
            values : Object.values(enums.stockWeight),
        },
        materialType: {
            type : DataTypes.ENUM,
            values : Object.values(enums.materialType),
        },
    },
    {
        timestamps: true
    }
);

User.hasMany(Stock, {
    foreignKey: 'companyId'
});

Stock.belongsTo(User, {
    foreignKey: 'companyId'
});

User.hasMany(Stock, {
    foreignKey: 'agentId'
});

Stock.belongsTo(User, {
    foreignKey: 'agentId'
});

export default Stock;






