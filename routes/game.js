const express = require('express');
const router = express.Router();

const { getGames, getById, create, update, deleteGame } = require('../controllers/gameController');

router.get('/', getGames);
router.get('/:gameId', getById);
router.post('/create', create);
router.post('/update/:gameId', update);
router.delete('/:gameId', deleteGame);

module.exports = router;