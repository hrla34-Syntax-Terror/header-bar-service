import React from 'react';
import TopNav from './TopNav.jsx';
import MainHeader from './MainHeader.jsx';
import axios from 'axios';

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
        <MainHeader></MainHeader>

      </header>
    );
  }
}

export default App;