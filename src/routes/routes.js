import { Router } from "express";
import UserController from "../app/controllers/UserController.js";


const route = Router()

route.get("/", UserController.index)
route.get("/usuario/:id", UserController.show)
route.post('/usuario', UserController.create)
route.put("/usuario/:id", UserController.update)
route.delete("/usuario/:id", UserController.delete)


export default route