const fsPromise = require('fs').promises;

module.exports = (path) => fsPromise
  .readFile(path, { encoding: 'utf8' })
  .then((res) => JSON.parse(res));
