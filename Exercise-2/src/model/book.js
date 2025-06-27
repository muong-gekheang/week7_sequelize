import { DataTypes } from "sequelize";
import sequelize from "../database/database.js"

const Book = sequelize.define("book", 
    {
        title : DataTypes.STRING,
        publicationYear : DataTypes.INTEGER,
        pages: DataTypes.INTEGER,
    }
);

export default Book;