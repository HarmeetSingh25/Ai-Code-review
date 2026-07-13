import express from "express";
import cors from "cors";
import helmet from "helmet";
import morgan from "morgan";
const app = express()

app.use(cors())
app.use(helmet())
app.use(morgan("dev"))
app.use(express.json())
app.use(express.urlencoded({ extended: true }));

app.use("/health" , (req,res)=>{
    res.status(200).json({
        message:"Success"
    })
})
export default app