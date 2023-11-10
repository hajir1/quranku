import express from "express"
import {RandomController} from "../controllers/random.controller.js"
const router = express.Router()


router.get("/", RandomController);

export default router
