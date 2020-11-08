const express = require('express');
const app = express();
const port = 3000;
const db = require('../database/index.js');
const bodyParser = require('body-parser');
const parseString = require('xml2js').parseString;
const axios = require('axios');
const goodreads = require('../goodreads.js');

app.use(express.static('public'));

app.use(bodyParser.json());

app.post('/books', (req, res) => {
  axios.get(`https://www.goodreads.com/search.xml?key=${goodreads.API_KEY}&q=${req.body.data}`)
    .then(response => {
      parseString(response.data, (err, result) => {
        if (err) {
          console.log(err);
        } else {
          db.save(result.GoodreadsResponse.search[0].results[0].work[0])
            .then(() => res.sendStatus(200))
        }
      });
    })
    .catch(err => console.log(err))
});

app.get('/books', (req, res) => {
  db.model.find((err, books) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(books);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));