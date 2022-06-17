const { Router } = require('express');
const express = require('express');
const router = express.Router();

const { Authenticate, LogOut } = require('../controllers/AuthController');

router.post('/', Authenticate);

router.post('/log-out', LogOut);

module.exports = router;