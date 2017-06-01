import React, { Component } from 'react';
import Header from './Header/Header'


class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <div>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default App;
