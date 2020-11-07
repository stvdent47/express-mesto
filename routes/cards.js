const cardRouter = require('express').Router();
const { getCards, getCard } = require('../controllers/cards.js');

cardRouter.get('/cards', getCards);
cardRouter.get('/cards/:id', getCard);

module.exports = cardRouter;
