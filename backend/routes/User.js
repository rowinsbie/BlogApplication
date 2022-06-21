const express = require('express');
const router = express.Router();
const { createUser, getUserData, login } = require('../controllers/UserController');
router.post('/', createUser);
router.post('/login', login);

router.get('/get-user-data', getUserData);


module.exports = router;