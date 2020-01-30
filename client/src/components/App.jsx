import React from 'react';
import TopNav from './TopNav.jsx';

class App extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <header>
        <TopNav></TopNav>
      </header>
    );
  }
}

export default App;