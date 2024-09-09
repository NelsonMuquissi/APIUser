import { Router } from "express";
import UserController from "../app/controllers/UserController.js";


const route = Router()

route.get("/", UserController.index)
route.post("usuario")


export default route