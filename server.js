import express from "express";
import mongoose  from "mongoose";
import cors from "cors"
import dotenv from "dotenv"

dotenv.config('/custom/path/.env' );

const app = express()
const port = process.env.PORT

app.use(cors())
app.use(express.json())


mongoose.connect(process.env.MONGO_URI)
.then(()=>{
    console.log("MongoDb Connected")
})
.catch((err)=>{
    console.log(err.message)
})

app.get("/",(req,res)=>{
    res.send("Hello Everyone")
})

app.listen(port,(req,res)=>{
    console.log(`Server is listinig on http://localhost:${port}`)
})

