import React from 'react';
import Book from './Book.jsx';

const BookList = (props) => (
  <div>
    {props.books.length === 0 ? <p>Sorry, no books to display.</p> : null}
    <table>
        {props.books.map(book => <Book key={book._id} book={book} toggleRead={props.toggleRead} deleteBook={props.deleteBook}/>)}
    </table>
  </div>
)


export default BookList;