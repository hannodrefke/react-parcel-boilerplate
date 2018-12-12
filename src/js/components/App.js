import React from 'react';

const initialState = {
  message: 'React.JS Parcel.JS Boilerplate',
};

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = initialState;
  }

  render() {
    return (
      <h1>{this.state.message}</h1>
    );
  }
}

export default App;
