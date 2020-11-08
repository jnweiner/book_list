import React from 'react';
import BookList from './BookList.jsx';
import SearchBar from './SearchBar.jsx';
import AddBar from './AddBar.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    };
    this.search = this.search.bind(this);
    this.addBook = this.addBook.bind(this);
    this.fetchAllBooks = this.fetchAllBooks.bind(this);
    this.toggleRead = this.toggleRead.bind(this);
    this.deleteBook = this.deleteBook.bind(this);
  }

  componentDidMount() {
    this.fetchAllBooks()
  }

  addBook(title) {
    axios.post('/books', {data: title})
      .then(() => this.fetchAllBooks())
      .catch(err => console.log(err));
  }

  fetchAllBooks() {
    return axios.get('/books')
      .then(results => {
        this.setState({
          books: results.data
        });
      })
      .catch(err => console.log(err));
  }

  search(query, property) {
    axios.get(`/books/${property}/${query}`)
      .then(results => {
        this.setState({
          books: results.data
        });
      })
      .catch(err => console.log(err));
  }

  toggleRead(bookId, status) {
    axios.put(`/books/${bookId}/${status}`)
      .catch(err => console.log(err));
  }

  deleteBook(bookId) {
    axios.delete(`/books/${bookId}`)
      .then(() => this.fetchAllBooks())
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <AddBar addBook={this.addBook} />
        <br />
        <SearchBar search={this.search}/>
        <br />
        <button onClick={this.fetchAllBooks}>All books</button>
        <button onClick={() => this.search(true, 'read')}>Already read</button>
        <button onClick={() => this.search(false, 'read')}>To read</button>
        <p></p>
        <BookList books={this.state.books} toggleRead={this.toggleRead} deleteBook={this.deleteBook}/>
      </div>
    )
  }
}

export default App;