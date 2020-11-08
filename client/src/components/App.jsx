import React from 'react';
import BookList from './BookList.jsx';
import SearchBar from './SearchBar.jsx';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books,
      booksToDisplay: []
    };
    this.search = this.search.bind(this);
  }

  componentDidMount() {
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
        <SearchBar search={this.search}/>
        <br />
        <BookList books={this.state.booksToDisplay} />
      </div>
    )
  }
}

export default App;