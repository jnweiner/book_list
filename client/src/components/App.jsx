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
        <button onClick={this.fetchAllBooks}>All books</button>
        <button onClick={() => this.search(true, 'read')}>Already read</button>
        <button onClick={() => this.search(false, 'read')}>To read</button>
        <p></p>
        <BookList books={this.state.books} />
      </div>
    )
  }
}

export default App;