import express from "express"
import {HomeController} from "../controllers/home.controller.js"

const router = express.Router()

router.get("/", HomeController);

export default router
