import React from 'react';

const Book = (props) => (
  <tr>
    <td>
      {props.book.title} < br/>
      {props.book.author} 
    </td>
  </tr>
)


export default Book;