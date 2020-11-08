const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/bookList', { useNewUrlParser: true, useUnifiedTopology: true });

const mongoConnect = mongoose.connection;
mongoConnect.on('error', console.error.bind(console, 'connection error:'));
mongoConnect.once('open', () => console.log('connection to mongodb'));

const bookSchema = new mongoose.Schema({
  title: String,
  author: String,
  year: Number,
  avg_rating: Number,
  image_url: String,
  read: Boolean
});

const Book = mongoose.model('Book', bookSchema);

module.exports = {
  mongoConnect: mongoConnect,
  model: Book
};