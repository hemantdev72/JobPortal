import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
import dbConnect from './config/db.js';
import userRouter from './routes/user.routes.js';
import companyRoute from './routes/company.routes.js';
import applicationRoute from './routes/application.route.js'
import jobRoute from './routes/job.route.js'

const app=express();

app.use(express.json());
app.use(cookieParser());
dotenv.config();
const corsOptions = {
    origin: process.env.FRONTEND_URL || 'http://localhost:5173', // Your frontend URL
    methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
    credentials: true, // Allow credentials (cookies, headers, etc.)
};

// Apply CORS middleware
app.use(cors(corsOptions));

app.get("/home",(req,res)=>{
    return res.status(200).json({
        success:true,
        msg:"hi there"
    })
})

app.use("/api/v1/user",userRouter);
app.use('/api/v1/company',companyRoute);
app.use('/api/v1/job',jobRoute);
app.use('/api/v1/application',applicationRoute);


app.listen(process.env.PORT,()=>{
    console.log("app is running");
    dbConnect();
})


