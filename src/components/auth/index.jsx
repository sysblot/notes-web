import React from 'react';
import './style.css';
import { Redirect } from 'react-router-dom';

const GOOGLE_BUTTON_ID = "google-sign-in-button";


class Auth extends React.Component {
  constructor(props){
    super(props)
    this.state = {isLoggedIn : false};
  }

  componentDidMount() {
    window.gapi.signin2.render(GOOGLE_BUTTON_ID, {
      width: 200,
      height: 50,
      onsuccess: this.onSuccess.bind(this)
    });
  }

  onSuccess(googleUser) {
    const id_token = googleUser.getAuthResponse().id_token;
    
    this.setState({isLoggedIn : true})
  }

  render(){
    if(this.state.isLoggedIn){
      return <Redirect to="/notes"/>
    }
    return (
      <div ref={el => (this.div = el)}>
        <div id={GOOGLE_BUTTON_ID} />
      </div>
    );
  }
};

export default Auth;
