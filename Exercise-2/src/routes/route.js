import express from "express";
import { addNewAuthor, createBook } from "../controllers/controllers.js";


const router = express.Router();

router.post("/", addNewAuthor);
router.post("/book", createBook);

export default router;