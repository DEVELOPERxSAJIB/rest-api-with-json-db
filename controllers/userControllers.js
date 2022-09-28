const path = require('path');
const { readFileSync, writeFileSync } = require('fs');
const { json } = require('express');


/**
 * @desc get all user data
 * @name GET /api/v1/user
 * @access Public
 */
const getAllUser = (req, res) => {

    // get all students from json db
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    // send response with collections
    res.json(users).status(200);
}


/**
 * @desc get all user data
 * @name POST /api/v1/user
 * @access Public
 */
const createUser = (req, res) => {

    // get all users
    const users = JSON.parse(readFileSync(path.join(__dirname, '../db/users.json')));

    // distructure info from request
    const { name, skill } = req.body;

    // rand id
    const rand_id = Math.floor(Math.random() * 1000000000).toString();

    // validation
    if( !name || !skill ) {
        res.status(400).json({
            message : "name and skills are required"
        })
    } else {
        users.push({
            id : rand_id,
            name : name,
            skill : skill
        });
        writeFileSync(path.join(__dirname, '../db/users.json'), JSON.stringify(users));
        res.status(201).json({
            message : "User Create Successfully"
        })
    }
}



// export controllers
module.exports = {
    getAllUser,
    createUser
}