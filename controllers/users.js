const User = require('../models/user.js');

const getUsers = (req, res) => {
  User.find()
    .then((data) => res.send(data))
    .catch(() => {
      res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};

const getUser = (req, res) => {
  const { userId } = req.params;
  User.findOne({ _id: userId })
    .then((user) => {
      if (!user) {
        res.status(404).send({ message: 'Нет пользователя с таким id' });
      }
      res.send(user);
    })
    .catch(() => {
      res.status(500).send({ message: 'Запрашиваемый ресурс не найден' });
    });
};

const createUser = (req, res) => {
  console.log(req.body);
  return null;
};

module.exports = {
  getUsers,
  getUser,
  createUser,
};
