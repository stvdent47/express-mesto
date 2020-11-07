const express = require('express');
const path = require('path');

const userRouter = require('./routes/users');
const cardRouter = require('./routes/cards');

const app = express();
const { port = 3000 } = process.env;

app.use(express.static(path.join(__dirname, 'public')));
app.use('/', userRouter);
app.use('/', cardRouter);
app.use('*', (req, res) => res.status(404).send({ message: 'Запрашиваемый ресурс не найден' }));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`);
});
