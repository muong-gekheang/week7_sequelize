import sequelize from "../databases/database.js";
import { DataTypes } from "sequelize";

const AttendanceRecord = sequelize.define("attendanceRecord", 
    {
        date:{
            type: DataTypes.DATEONLY,
            allowNull: false
        },
        status:{
            type: DataTypes.STRING, 
            allowNull:false
        }
    }
);  

export default AttendanceRecord;