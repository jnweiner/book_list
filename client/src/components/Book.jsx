import React from 'react';
import ReadCheckbox from './ReadCheckbox.jsx';

const Book = (props) => (
  <tr>
    <td colSpan="2">
      <strong>Title: </strong>{props.book.title} <br/>
      <strong>Author: </strong>{props.book.author} <br />
      <ReadCheckbox book={props.book}/>
    </td>
  </tr>
)

export default Book;