const express = require('express');

const router = express.Router();

const UserController = require('../controllers/user');

// post request to go to local domain /api/user (userRoutes) then '/signup'
router.post('/signup', UserController.createUser);

router.post('/login', UserController.userLogin);

module.exports = router;



