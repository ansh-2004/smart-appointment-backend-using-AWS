import express from 'express'
import cors from 'cors'
import authRoutes from "./routes/auth.routes.js";
import appointmentsRoutes from "./routes/appointment.routes.js";
const app = express()

app.use(cors())
app.use(express.json())

app.use("/api/auth", authRoutes);
app.use("/api/appointments", appointmentsRoutes);
app.get("/health",(req,res)=>{
    res.status(200).json({status : "OK"})
})

export default app;