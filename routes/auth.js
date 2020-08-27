const express = require('express');
const router = express.Router();

const { listAll } = require('../controllers/authController');

router.get('/', listAll);

module.exports = router;