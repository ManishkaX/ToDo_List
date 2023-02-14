import { Router } from "express";
import { noteController } from "../controllers/noteController";

export const router = Router();

router.get("/", noteController.createMainPage);
router.post("/add", noteController.addNote);
router.get("/remove", noteController.removeNote);
router.get("/sortByComp", noteController.sortByComplete);
router.get("/sortByDate", noteController.sortByDate);
