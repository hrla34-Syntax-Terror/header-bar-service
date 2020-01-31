import React from 'react';

class SearchBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {
    return (
      <form onSubmit={(e) => e.preventDefault()}>
        <input id="AJsearchbox" placeholder="Search for great gear & clothing"></input>
        <button id="AJsearchbutton">
          <svg viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path d="M20.707 19.294a1 1 0 01-1.414 1.414l-4.244-4.245a7.5 7.5 0 111.414-1.414l4.244 4.245zM10.5 16a5.5 5.5 0 100-11 5.5 5.5 0 000 11z"/>
          </svg>
        </button>
      </form>
    );
  }
}

export default SearchBar;