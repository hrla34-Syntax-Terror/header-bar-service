import React from 'react';
import SearchBar from './Searchbar.jsx';
import Submenu from './Submenu.jsx';

class MainHeader extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <div id="AJmainheader">
        <img id="AJreilogo" src='https://hrla34-syntax-terror-anthony.s3-us-west-1.amazonaws.com/rei-co-op-logo-white.svg'></img>
        <div id="AJheaderbody">
          <div id="AJheaderactions">
            <SearchBar/>
          </div>
          <hr/>
          <Submenu></Submenu>
        </div>
      </div>
    );
  }
}

export default MainHeader;