import express from "express";
import {
  getDoaByIdContoller,
  getDoaContoller,
} from "../controllers/doa.controller.js";

const router = express.Router();

router
  .get("/", getDoaContoller)
  .get("/:id",getDoaByIdContoller)

export default router;
