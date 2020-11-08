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
        <tr className={this.state.selected ? 'book selected' : 'book'} onClick={this.toggleSelected}>
          <td colSpan="2">
            <p><strong>{this.props.book.title}</strong>< br/>
            <em>{this.props.book.author}</em>
            </p>
          </td>
        </tr>
        {this.state.selected ? <BookDropdown book={this.props.book} toggleRead={this.props.toggleRead}/> : null}
      </tbody>
    )
  }



}

export default Book;