const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/index.js');
const bodyParser = require('body-parser');

app.use(express.static('public'));

app.post('/books', (req, res) => {
  console.log(req.body);
});

app.listen(port, () => console.log(`listening on port ${port}`));