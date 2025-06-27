import express from 'express';
import { markAttendanceById, getAttendanceByIdAndDate, getAttendanceByClassId, getAttendanceById} from '../controllers/controllers.js';

const router = express.Router();
router.get("/attendance", getAttendanceByIdAndDate);
router.post("/attendance", markAttendanceById);

// these two routes are not working, I am trying to find the problem, but everything seem to be correct.
router.get("/classes/:id/attendance", getAttendanceByClassId);
router.get("/students/:id/attendance", getAttendanceById);

export default router;