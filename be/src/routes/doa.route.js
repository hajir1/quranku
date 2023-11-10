import express from "express"
import {getDoaContoller} from "../controllers/doa.controller.js"

const router = express.Router()

router.get("/", getDoaContoller);

export default router