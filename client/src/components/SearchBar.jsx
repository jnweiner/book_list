import React from 'react';

class SearchBar extends React.Component {
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

  handleSubmit(e) {
    this.props.search(this.state.value, e.target.id);
    this.setState({
      value: ''
    });
  }

  render() {
    return (
      <div>
        Search for a book:<input type="text" value={this.state.value} onChange={this.handleChange}></input>
        <button id="title" onClick={this.handleSubmit}>Search by title</button>
        <button id="author" onClick={this.handleSubmit}>Search by author</button>
      </div>
    )
  }

}

export default SearchBar;