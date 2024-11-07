import express from "express";
import dotenv from 'dotenv';
import colors from 'colors';


//configure env file
dotenv.config();

//rest object
const app = express();

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