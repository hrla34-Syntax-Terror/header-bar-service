import React from 'react';
import Modal from 'react-modal';

class SectionActions extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signinVisible: false,
    };

    this.onSignInClick = this.onSignInClick.bind(this);
    this.openSignin = this.openSignin.bind(this);
    this.closeSignin = this.closeSignin.bind(this);
  }

  onSignInClick(e) {
    this.setState({ signinVisible: !this.state.signinVisible });
  }

  openSignin() {
    this.setState({signinVisible: true});
  }

  closeSignin() {
    this.setState({signinVisible: false});
  }


  render() {

    return (
      <ul id="AJsectionactions">
        <li className="AJsign-in AJhovergreen" onClick={this.onSignInClick}>
          <div>
            SIGN IN
          </div>
          <div id="AJaccountprofilesvgwrap" className="AJactionsvgwrap" >
            <svg id="AJaccount-profile" viewBox="0 0 24 24">
              <path d="M12 12a3.5 3.5 0 100-7 3.5 3.5 0 000 7zm6.762 7a7.073 7.073 0 00-13.524 0h13.524zM4 21a1 1 0 01-1-1h-.008a9.08 9.08 0 01.02-.159 9.08 9.08 0 015.454-7.127 5.5 5.5 0 117.068 0A9.08 9.08 0 0121.008 20H21a1 1 0 01-1 1H4z" />
            </svg>
          </div>
        </li>
        {this.state.signinVisible ?
          // <Modal isOpen={this.state.signinVisible} onRequestClose={this.closeSignin} className="AJsigninmodal">
            <li className="AJsigninmodal">
              <div id="AJsigninwrapper" onBlur={this.onBlurSignIn}>
                <button id="AJclosebutton" onClick={this.onSignInClick}>
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                    <path d="M13.406 12.006l3.297-3.296a1 1 0 10-1.414-1.414l-3.297 3.295-3.285-3.295A1 1 0 107.293 8.71l3.285 3.295-3.285 3.288a1 1 0 001.414 1.415l3.285-3.289 3.297 3.289a1 1 0 001.414-1.415l-3.297-3.287z" />
                  </svg>
                </button>
                <div className="mtns">
                  <svg aria-hidden="true" version="1.0" xmlns="http://www.w3.org/2000/svg" width="80" height="19" fill="#000" className="AJmtnssignin">
                    <path d="M0 0 V25 H5 L30 0 L45 15 L54 7 L75 25 H80 V0 Z"></path>
                  </svg>
                </div>
                <form id="AJsigninform" onSubmit={(e) => e.preventDefault()}>
                  <div id="AJemailinput">
                    <div>Email</div>
                    <input id="AJemailinputbox"></input>
                  </div>
                  <div id="AJpasswordinput">
                    <div>Password</div>
                    <input id="AJpasswordinputbox"></input>
                    <div id="AJforgotpassword">Forgot password?</div>
                  </div>
                  <div id="AJdisclaimer">
                    By signing into your account, you agree to REI's Terms of Use and acknowledge you have read its Privacy Policy.
                  </div>
                  <button id="AJsigninbtn" className="AJsigninmodalbtn">Sign in</button>
                  <button id="AJcreatebtn" className="AJsigninmodalbtn">Create an account</button>
                </form>
              </div>
            </li>
          /*</Modal>*/ : null}
        <li className="AJstores AJhovergreen">
          <div>
            STORES
          </div>
          <div id="AJstoressvgwrap" className="AJactionsvgwrap">
            <svg id="AJlocation-pin-stroke" viewBox="0 0 24 24">
              <path d="M12 2a8 8 0 018 8c0 2.81-2.428 6.713-7.284 11.698a1.006 1.006 0 01-1.432 0C6.428 16.713 4 12.811 4 10a8 8 0 018-8zm0 2a6 6 0 00-6 6c0 2.013 1.968 5.282 6 9.552 4.032-4.27 6-7.539 6-9.552a6 6 0 00-6-6zm0 4.5a1.5 1.5 0 110 3 1.5 1.5 0 010-3z" />
            </svg>
          </div>
        </li>
        <li className="AJcart AJhovergreen">
          <div>
            CART
          </div>
          <div id="AJcartsvgwrap" className="AJactionsvgwrap ">
            <svg id="AJcart" viewBox="0 0 24 24">
              <path d="M9.25 18.5a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zm7.5 0a1.25 1.25 0 110 2.5 1.25 1.25 0 010-2.5zM6 3c.317 0 .6.147.782.377.085.105.15.23.187.369L7.573 6H20a1 1 0 01.936.648c.073.19.089.404.032.616l-1.607 5.998a1 1 0 01-1.048.738H9.168l-.402 1.5H18a1 1 0 010 2H7.47a1 1 0 01-.864-.497.997.997 0 01-.107-.77l.873-3.258L5.236 5H4a1 1 0 110-2h2zm12.7 5H8.11l1.071 4h8.447L18.7 8z" />
            </svg>
          </div>
        </li>
      </ul>
    );
  }
}

export default SectionActions;