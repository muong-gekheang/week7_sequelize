import { DataTypes } from "sequelize";
import sequelize from "../database/database.js";

const Author = sequelize.define("author",
    {
        name: DataTypes.STRING,
        birthYear: DataTypes.INTEGER,
    }
);

export default Author;