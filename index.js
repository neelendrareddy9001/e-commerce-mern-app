import express from "express";
import dotenv from 'dotenv';
import colors from 'colors';
import connectDB from "./config/db.js";
import morgan from 'morgan';
import authRoutes from './routes/authRoutes.js';

//configure env file
dotenv.config();


//database config
connectDB();

//rest object
const app = express();

//middleware
app.use(express.json())
app.use(morgan('dev'))


//routes
app.use('api/v1/auth', authRoutes)


//rest api
app.get('/', (req, res) => {
    res.send(
        '<h1>Welcome to e-commerce-mern</h1>'
    )
})

//PORT
const PORT = process.env.PORT || 8080;


//run listen
app.listen(PORT, () => {
    console.log(`Server running on ${PORT}`.bgCyan.white)
})