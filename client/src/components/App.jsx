import React from 'react';
import BookList from './BookList.jsx';
import SearchBar from './SearchBar.jsx';
import AddBar from './AddBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
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
    const newBook = {
      title: title,
      author: 'tbd'
    };
    this.setState({
      books: this.state.books.concat(newBook),
    }, () => this.displayAllBooks());
  }

  displayAllBooks() {
    this.setState({
      booksToDisplay: this.state.books
    });
  }

  search(query, queryType) {
    var results = [];
    this.state.books.forEach(book => {
      if (book[queryType].toLowerCase().includes(query.toLowerCase())) {
        results.push(book);
      }
    });
    this.setState({
      booksToDisplay: results
    });
  }

  render() {
    return (
      <div>
        <AddBar addBook={this.addBook} />
        <br />
        <SearchBar search={this.search}/>
        <br />
        <BookList books={this.state.booksToDisplay} />
      </div>
    )
  }
}

export default App;