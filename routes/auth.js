const express = require('express');
const router = express.Router();

const { listAll, getById } = require('../controllers/authController');

router.get('/', listAll);
router.get('/:userId', getById);

module.exports = router;