# Rest Api with express

<img src="/public/images/WP (560 × 560 px) (288 × 110 px) (288 × 150 px) (3).png">

###### This is our first time work with api

## First colone this repo and install its package

```console
$ npm install
```

## Server structure

```js
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

```

## packages

* Express js
* Nodemon
* Colors
* dotenv
* multer
* nodemailer

## Live link

[Education board result](http://www.educationboardresults.gov.bd/)