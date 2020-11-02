const express = require('express');
const path = require('path');

const app = express();
const { port = 3000 } = process.env;

app.get('/', (req, res) => res.send('Hello World!'));
app.listen(port, () => {
  console.log('Example app listening on port port!');
});
app.use(express.static(path.join(__dirname, 'public')));
