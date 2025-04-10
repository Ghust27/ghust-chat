import express from "express"
import authRoutes from "./routes/auth.route.js"
import dotenv from 'dotenv'
dotenv.config()
import {connectDB} from "./lib/db.js"

const app = express() 
const port = process.env.PORT || 5001

app.use(express.json())

app.use('/api/auth',authRoutes)

app.listen(port,()=>{
    console.log(`Server is runnin on port ${port}`)
    connectDB()
})