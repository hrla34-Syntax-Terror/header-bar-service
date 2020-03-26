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
      <ul className="AJmenulevel2">
        {
          this.props.lvl2.map(lvl3 => (
            <li className="AJmenulevel2item">
              <div className="AJmenulevel3title">
                {lvl3.title}
              </div>
              <ul className="AJmenulevel3">
                {
                  lvl3.items.map((items) => (
                    <li className="AJmenulevel3item">
                      {items}
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