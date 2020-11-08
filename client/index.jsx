import React from 'react';
import ReactDOM from 'react-dom';
import BookList from './src/components/BookList.jsx';

var books = [
  {title: 'Alanna: The First Adventure', author: 'Tamora Pierce'},
  {title: 'Wild Magic', author: 'Tamora Pierce'},
  {title: 'Bossypants', author: 'Tina Fey'},
  {title: 'Harry Potter and the Chamber of Secrets', author: 'J.K. Rowling'},
  {title: 'The Phantom Tollbooth', author: 'Norton Juster'},
];

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: this.props.books
    };
  }

  render() {
    return (
      <div>
        <BookList books={this.state.books} />
      </div>
    )
  }
}

ReactDOM.render(<App books={books}/>, document.getElementById('app'));