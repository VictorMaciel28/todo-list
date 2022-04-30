import { DataTypes } from "sequelize";
import { db } from "../database/db";

export const TaskModel = db.define("task", {
    id:{
        type: DataTypes.INTEGER,
        autoIncrement: true,
        allowNull: false,
        primaryKey: true
    }
});
