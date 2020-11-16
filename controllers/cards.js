const Card = require('../models/card.js');

const getCards = (req, res) => {
  Card.find()
    .then((card) => res.status(200).send(card))
    .catch(() => {
      res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};

const createCard = (req, res) => {
  const { name, link } = req.body;

  Card.create({ name, link, owner: req.user._id })
    .then((card) => res.status(200).send(card))
    .catch((err) => res.status(400).send(err));
};

const deleteCard = (req, res) => {
  const { cardId } = req.params;
  Card.findByIdAndRemove(cardId)
    .then(() => res.send('Карточка успешно удалена.'))
    .catch((err) => res.status(400).send(err));
};

module.exports = {
  getCards,
  createCard,
  deleteCard,
};
