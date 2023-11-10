import express from "express";
import {
  getSurahsController,
  getSurahController,
  getAyahsController,
  getAyahController,
} from "../controllers/surahs.controller.js";
const router = express.Router();

router.get("/", getSurahsController);
router.get("/:surahNumber", getSurahController);
router.get("/:surahNumber/ayahs", getAyahsController);
router.get("/:surahNumber/ayahs/:ayahNumber", getAyahController);

export default router;
