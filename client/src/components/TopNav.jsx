import React from 'react';

var TopNav = (props) => {
  return (
    <div id="AJnavwrapperbackground">
      <div id="AJnavwrapper">
        <ul id="AJtopnav">
          <li className="AJitem" id="AJselected">SHOP REI</li>
          <li className="AJitem">REI OUTLET</li>
          <li className="AJitem">USED GEAR</li>
          <li className="AJitem">REI ADVENTURES</li>
          <li className="AJitem">CLASSES &amp; EVENTS</li>
          <li className="AJitem">EXPERT ADVICE</li>
          <li className="AJitem">CO-OP JOURNAL</li>
          <li className="AJitem">CONVERSATIONS</li>
          <li className="AJitem">CAMPING PROJECT</li>
        </ul>
      </div>
    </div>
  );
};

export default TopNav;