const express = require('express');
const router = express.Router();
const {protect} = require('../middleware/authMiddleware');
const { createUser, getUserData, login } = require('../controllers/UserController');
router.post('/', createUser);
router.post('/login', login);

router.get('/get-user-data', protect,getUserData);


module.exports = router;