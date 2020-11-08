import React from 'react';
import BookList from './BookList.jsx';
import SearchBar from './SearchBar.jsx';
import AddBar from './AddBar.jsx';
import axios from 'axios';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      booksToDisplay: []
    };
    this.search = this.search.bind(this);
    this.addBook = this.addBook.bind(this);
    this.displayAllBooks = this.displayAllBooks.bind(this);
  }

  componentDidMount() {
    this.displayAllBooks();
  }

  addBook(title) {
    axios.post('/books', {data: title})

    // const newBook = {
    //   title: title,
    //   author: 'tbd',
    //   read: false
    // };
    // this.setState({
    //   books: this.state.books.concat(newBook),
    // }, () => this.displayAllBooks());
  }

  displayAllBooks() {
    this.setState({
      booksToDisplay: this.state.books
    });
  }

  search(query, property) {
    var results = [];
    this.state.books.forEach(book => {
      if (typeof query === 'boolean') {
        if (book[property] === query) {
          results.push(book);
        }
      } else {
        if (book[property].toLowerCase().includes(query.toLowerCase())) {
          results.push(book);
        }
      }
    });
    this.setState({
      booksToDisplay: results
    });
  }

  toggleRead(book) {
    // put request for that particular book in the database
  }

  render() {
    return (
      <div>
        <AddBar addBook={this.addBook} />
        <br />
        <SearchBar search={this.search}/>
        <br />
        <button onClick={this.displayAllBooks}>All books</button>
        <button onClick={() => this.search(true, 'read')}>Already read</button>
        <button onClick={() => this.search(false, 'read')}>To read</button>
        <p></p>
        <BookList books={this.state.booksToDisplay} />
      </div>
    )
  }
}

export default App;