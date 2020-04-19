import React from 'react';
import './style.css';

const GOOGLE_BUTTON_ID = "google-sign-in-button";


class Auth extends React.Component {

  componentDidMount() {
    window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
      width: 200,
      height: 50,
      onsuccess: this.onSuccess
    });
  }

  onSuccess(googleUser) {
    console.log(googleUser);
  }

  render(){
    return <div id={GOOGLE_BUTTON_ID} />;
  }
};

export default Auth;
