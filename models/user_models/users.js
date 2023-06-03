import sequelize from "../../db_config/db_config.js";
import {DataTypes} from "sequelize";

let UserTypes= Object.freeze({
    Agent: 'Agent',
    Company: 'Company',
    Hotel: 'Hotel'
});
let User = sequelize.define('users',
    {
        id: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        name: {
            type: DataTypes.TEXT,
            required: true,

        },
        mobileNumber: DataTypes.STRING(255),
        address: DataTypes.STRING(255),
        loginId: {
            type: DataTypes.STRING(255),
            unique: true
        },
        password: DataTypes.TEXT,
        profileImage: DataTypes.TEXT,
        thumbId: DataTypes.TEXT,
        nic: DataTypes.TEXT,
        isActive: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        isAdmin: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
        },
        userType: {
            type : DataTypes.ENUM,
            values : Object.values(UserTypes),
            // defaultValue :  UserTypes.
        },
    },
    {
        timestamps: true
    }
);

export default User;






