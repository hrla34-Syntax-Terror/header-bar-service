/*
Submenu2 is to show all the menu items from the submenu navigation bar.
It'll basically be a list of lists.

*/

import React from 'react';

class Submenu2 extends React.Component {
  constructor (props) {
    super(props);
    this.state = {

    }
  }

  render () {
    return (
      <ul className="AJnavlevel2">
        {
          this.props.lvl2.map(lvl2 => (
            <li className="AJnavlevel2item">
              <div className="AJnavlevel2title">
                {lvl2.title}
              </div>
              <ul className="AJnavlevel3">
                {
                  lvl2.items.map((lvl3) => (
                    <li className="AJnavlevel3item">
                      {lvl3}
                    </li>
                  ))
                }
              </ul>
            </li>
          ))
        }
      </ul>
    )
  }
}

export default Submenu2;