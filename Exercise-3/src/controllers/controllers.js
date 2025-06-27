import{ Class, Student, AttendanceRecord } from '../models/index.js';

export const markAttendanceById  = async (req, res) => {
    try{
        const { studentId, date } = req.query;
        const {status, classId } = req.body;

        if(!studentId){ 
        return res.status(400).json({
            message: "student id is required",
        })
        }  
        
        if(!date){
            return res.status(400).json({
                meesage: "date is required",
            })
        }

        if(!classId){ 
        return res.status(400).json({
            message: "class id is required",
        })
        }  
    
        const attendance = await AttendanceRecord.create({studentId, classId, date, status});
        return res.status(201).json({
            message: "attendance is inserted into the databased succesfully",
            data: attendance,
        })
    } catch ( error ) {
        console.error("Insert error: ", error);
        return res.status(500).json({ error: "Failed to insert attendance"});
    }
};

export const getAttendanceByIdAndDate = async (req, res) => {
    try{

        const{ studentId, date } = req.query;
        
        if(!studentId){ 
            return res.status(400).json({
                message: "student id is required",
            })
        }  
                
        if(!date){
            return res.status(400).json({
                meesage: "date is required",
            })
        }
    
        const attendance = await AttendanceRecord.findAll({where: {studentId: studentId, date: date}});

        if (attendance.length === 0) {
            return res.status(404).json({
                message: `No attendance records found for student id: ${studentId}.`,
            });
        }

        return res.status(200).json({
            message: `Here is the attendance of user with student id: ${studentId}.`,
            data: attendance,
        })
    } catch ( error ) {
        console.error("error: ", error);
        return res.status(500).json({ error: "Failed to get attendance by id and date"});
    }
};

export const getAttendanceByClassId = async (req, res) => {
    try{
        const classId = req.params.id;
        if(!classId){ 
            return res.status(400).json({
                message: "class id is required",
            })
        }  

        const attendance = await AttendanceRecord.findAll({where: {classId: classId}});

        console.log(attendance);
        if (attendance.length === 0) {
            return res.status(404).json({
                message: `No attendance found for class id: ${classId}`
            });
        }       
        return res.status(200).json({
            message: `Here is the attendance of class id: ${classId}`,
            data: attendance,
        })
    } catch ( error ){
        console.error("error: ", error);
        return res.status(500).json({ error: "Failed to get attendance by class id"});
    }
};

export const getAttendanceById = async(req, res) =>{
    try{

        const studentId = req.params.id;
        
        if(!studentId){ 
            return res.status(400).json({
                message: "student id is required",
            })
        }  

        const attendance = await AttendanceRecord.findAll({where: {studentId: studentId}});

        if (attendance.length === 0) {
            return res.status(404).json({
                message: `No attendance records found for student id: ${studentId}.`
            });
        }
        return res.status(200).json({
            message: `Here is the attendance of user with student id: ${studentId}.`,
            data: attendance,
        })

    } catch ( error ){
        console.error("error: ", error);
        return res.status(500).json({ error: "Failed to get attendance by id"});
    }
};