import React from 'react';
import BookDropdown from './BookDropdown.jsx';

class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: false
    };
    this.toggleSelected = this.toggleSelected.bind(this);
  }

  toggleSelected() {
    const newState = this.state.selected ? false : true;
    this.setState({
      selected: newState
    });
  }

  render() {
    return (
      <tbody>
        <tr onClick={this.toggleSelected}>
          <td className={this.state.selected ? 'book selected' : 'book'} colSpan="2">
            <p><strong>{this.props.book.title}</strong>< br/>
            <em>{this.props.book.author}</em>
            </p>
          </td>
        </tr>
        {this.state.selected ? <BookDropdown book={this.props.book} toggleRead={this.props.toggleRead} deleteBook={this.props.deleteBook}/> : null}
      </tbody>
    )
  }



}

export default Book;