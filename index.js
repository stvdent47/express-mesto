const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

const app = express();
const { port = 3000 } = process.env;

mongoose.connect('mongodb://localhost:27017/mestodb', {
  useNewUrlParser: true,
  useFindAndModify: false,
  useCreateIndex: true,
});

app.use(bodyParser.json());
app.use('/', userRouter);
app.use('/', cardRouter);
app.use('*', (req, res) => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
