import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        I am a React component!
      </div>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('app'));