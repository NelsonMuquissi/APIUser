import { Router } from "express";
import UserController from "../controllers/UserController.js";


const route = Router()

route.get("/", UserController.home())


export default route