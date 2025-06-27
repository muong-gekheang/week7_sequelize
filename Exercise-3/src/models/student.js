import DataTypes from "sequelize";
import sequelize from "../databases/database.js";

const Student = sequelize.define("student", 
    {
        name: DataTypes.STRING,
        age: DataTypes.INTEGER,
        gender: DataTypes.STRING,
    }   
);

export default Student;