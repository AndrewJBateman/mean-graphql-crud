const express = require('express');

const UserController = require('../controllers/user');

const router = express.Router();

// post request to go to local domain /api/user (userRoutes) then '/signup'
router.post('/signup', UserController.createUser);

router.post('/login', UserController.userLogin);

module.exports = router;



