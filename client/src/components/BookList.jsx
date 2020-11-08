import React from 'react';
import Book from './Book.jsx';

const BookList = (props) => (
  <div>
    {props.books.length === 0 ? <p>Sorry, no books to display.</p> : null}
    <table>
      <tbody>
        {props.books.map(book => <Book key={book.title} book={book} />)}
      </tbody>
    </table>
  </div>
)


export default BookList;