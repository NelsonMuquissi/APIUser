import express from "express"
import route from "./app/routes/routes.js"

const app = express()

app.use(express.json())
app.use(route)

export default app
