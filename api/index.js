import express from 'express'
import mongoose from 'mongoose';
import userRoutes from './routes/user.route.js'
import authRoutes from './routes/auth.router.js';
import dotenv from 'dotenv'
dotenv.config();

// mongoose.connect(process.env.MONGO).then(()=> {
//     console.log('connected to MongoDB');
// }).catch((err)=>{
//     console.log(err);
// })

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


app.listen(3000, ()=> {
    console.log("Server listening on port 3000")
})


app.use('/api/user',userRoutes)
app.use('/api/auth',authRoutes)