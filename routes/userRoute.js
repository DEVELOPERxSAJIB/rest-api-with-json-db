const express = require('express');
const { getAllUser, createUser } = require('../controllers/userControllers');

// init router
const router = express.Router();

// routes
router.get('/', getAllUser)
router.post('/', createUser)



// module exports
module.exports = router;