const bluebird = require('bluebird');
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookList', { useNewUrlParser: true, useUnifiedTopology: true });

const mongoConnect = mongoose.connection;
mongoConnect.on('error', console.error.bind(console, 'connection error:'));
mongoConnect.once('open', () => console.log('connection to mongodb'));

const bookSchema = new mongoose.Schema({
  _id: Number,
  title: String,
  author: String,
  year: String,
  avg_rating: String,
  image_url: String,
  read: Boolean
});

const Book = mongoose.model('Book', bookSchema);

const save = (bookData) => {
  const book = new Book({
    _id: Number(bookData.id[0]["_"]),
    title: bookData.best_book[0].title[0],
    author: bookData.best_book[0].author[0].name[0],
    year: bookData.original_publication_year[0]["_"],
    avg_rating: bookData.average_rating[0],
    image_url: bookData.best_book[0].image_url[0],
    read: false
  });

  return new Promise((resolve, reject) => {
    book.save((err, book) => {
      if (err) {
        reject(err);
      } else {
        resolve(book);
      }
    });
  });
};

module.exports = {
  mongoConnect: mongoConnect,
  model: Book,
  save: save
};