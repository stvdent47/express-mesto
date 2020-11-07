const path = require('path');
const readFile = require('../utils/read-file.js');

const pathToCards = path.join(__dirname, '..', 'data', 'cards.json');

module.exports.getCards = (req, res) => {
  readFile(pathToCards)
    .then((data) => res.send(data))
    .catch(() => {
      res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};

module.exports.getCard = (req, res) => {
  const { id } = req.params;
  readFile(pathToCards)
    .then((data) => {
      const card = data.find((item) => item._id === id);
      if (!card) {
        res.status(404).send({ message: 'Нет карточки с таким id' });
      }
      res.send(card);
    })
    .catch(() => {
      res.status(404).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};
