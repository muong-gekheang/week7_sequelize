import { DataTypes, Sequelize } from "sequelize";
import sequelize from "../databases/database.js";

const Class = sequelize.define("class", {
    className: DataTypes.STRING,
});

export default Class;