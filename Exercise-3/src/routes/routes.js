import express from 'express';
import { markAttendanceById, getAttendanceByIdAndDate, getAttendanceByClassId, getAttendanceById} from '../controllers/controllers.js';

const router = express.Router();
router.get("/attendance", getAttendanceByIdAndDate);
router.post("/attendance", markAttendanceById);

// these 2 routes is not working, I am trying to dins the problem too but everything seem to be correct.
router.get("/classes/:id/attendance", getAttendanceByClassId);
router.get("/students/:id/attendance", getAttendanceById);

export default router;