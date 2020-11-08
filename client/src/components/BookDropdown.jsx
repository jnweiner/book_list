import React from 'react';
import ReadCheckbox from './ReadCheckbox.jsx';

const BookDropdown = (props) => (
  <tr>
    <td>
      Published: <span className="info">{props.book.year}</span> <br />
      Average Goodreads Rating: <span className="info">{props.book.avg_rating}</span> <br />
      Read? <ReadCheckbox book={props.book} toggleRead={props.toggleRead}/> <br />
      <p></p>
      <button onClick={() => props.deleteBook(props.book._id)}>Remove this book</button>
    </td>
    <td>
      <img src={props.book.image_url}></img>
    </td>
  </tr>
  
)

export default BookDropdown;