import React from 'react';

class AddBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({
      value: e.target.value
    });
  }

  handleSubmit() {
    this.props.addBook(this.state.value);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div>
        Add a book (by title):<input type="text" value={this.state.value} onChange={this.handleChange}></input>
        <button onClick={this.handleSubmit}>Submit</button>
      </div>
    )
  }

}

export default AddBar;