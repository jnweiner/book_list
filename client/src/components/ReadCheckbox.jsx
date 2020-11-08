import React from 'react';

class ReadCheckbox extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      hasBeenRead: this.props.book.read
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(e) {
    this.setState({
      hasBeenRead: e.target.checked
    });
    this.props.toggleRead(this.props.book._id, e.target.checked);
  }

  render() {
    return (
      <input type="checkbox" checked={this.state.hasBeenRead} onChange={this.handleChange}></input>
    )
  }

}

export default ReadCheckbox;