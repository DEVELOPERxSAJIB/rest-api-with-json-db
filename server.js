const express = require('express');
const colors = require('colors');
const dotenv = require('dotenv');


// init environment variable
dotenv.config()
const PORT = process.env.PORT || 8080;

// init express
const app = express();

// express middlewares
app.use( express.json() );
app.use( express.urlencoded ( {extended : false }) );





// listen port
app.listen(PORT, () => {
    console.log(`server is running on ${PORT}`.bgGreen.black);
})
