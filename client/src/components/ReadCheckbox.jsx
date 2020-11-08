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
    console.log(e.target.checked);
    this.setState({
      hasBeenRead: e.target.checked
    });
    // activate toggleRead function
  }

  render() {
    return (
      <input type="checkbox" checked={this.state.hasBeenRead} onChange={this.handleChange}></input>
    )
  }

}

export default ReadCheckbox;