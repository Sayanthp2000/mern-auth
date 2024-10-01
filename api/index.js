import express from 'express'
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.router.js';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv'
dotenv.config();


mongoose.connect(process.env.MONGO, {
    serverSelectionTimeoutMS: 20000
})
.then(() => {
    console.log('Connected to MongoDB');
})
.catch(err => {
    console.log('MongoDB connection error:', err);
});


const app = express();
app.use(express.json());
app.use(cookieParser());


app.listen(3000, ()=> {
    console.log("Server listening on port 3000")
})


app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)

app.use((err,req,res,next)=> {
    const statusCode = err.statusCode || 500
    const message = err.message || 'Internal Server Error';
    return res.status(statusCode).json({
        success: false,
        message,
        statusCode,
    })
})