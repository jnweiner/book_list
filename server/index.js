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

app.get('/books/:property/:query', (req, res) => {
  var property = req.params.property;
  var query = req.params.query;
  db.model.find({[property]: query}, (err, relevantBooks) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.send(relevantBooks);
    }
  });
});

app.put('/books/:bookId/:status', (req, res) => {
  var id = req.params.bookId;
  var status = req.params.status
  db.model.update({_id: id}, {read: status}, (err, success) => {
    if (err) {
      res.sendStatus(500);
    } else {
      res.sendStatus(200);
    }
  });
});

app.listen(port, () => console.log(`listening on port ${port}`));