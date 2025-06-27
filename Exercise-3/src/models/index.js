import Class from "../models/class.js";
import Student from "../models/student.js";
import AttendanceRecord from "../models/attendanceRecord.js";


Student.hasMany(AttendanceRecord);
AttendanceRecord.belongsTo(Student);

Class.hasMany(AttendanceRecord);
AttendanceRecord.belongsTo(Class);

export {Class, Student, AttendanceRecord};
