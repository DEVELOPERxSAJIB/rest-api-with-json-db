const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');
const userRouter = require('./routes/userRoute')


// init environment variable
dotenv.config()
const PORT = process.env.PORT || 8080;

// init express
const app = express();

// express middlewares
app.use( express.json() );
app.use( express.urlencoded ( {extended : false }) );


// routes
app.use('/api/v1/user', userRouter);



// Database
    // users.json
    // students.json
    // products.json


// listen port
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`.bgGreen.black);
})
