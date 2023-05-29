import { DataTypes } from "sequelize";
import sequelize from "../Database/db";


var UserModel = sequelize.define('user', {
    id: {
        primaryKey : true,
        allowNull: false,
        unique: true,
        type: DataTypes.INTEGER
    },
    name: {
        allowNull: false,
        type: DataTypes.STRING
    },
    email: {
        allowNull: false,
        type: DataTypes.STRING
    },
    created_on: DataTypes.DATE,
    updated_on: DataTypes.DATE
},{
    timestamps: false,
    tableName: 'user',
});


export default UserModel;