import express from "express";
import {
  getAsmaulHusnaByIdController,
  getAsmaulHusnaController,
  getDzikirController,
  getDzikirPagiController,
  getDzikirSoreController,
} from "../controllers/doa.controller.js";
const router = express.Router();

router
  .get("/", getDzikirController)
  .get("/dzikirsore", getDzikirSoreController).get("/dzikirpagi",getDzikirPagiController)
  .get("/asmaulHusna", getAsmaulHusnaController)
  .get("/asmaulHusna/:id", getAsmaulHusnaByIdController);

export default router;
