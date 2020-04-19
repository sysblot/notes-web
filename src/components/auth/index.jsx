import React from 'react';

import './style.css';

const Auth = function () {

    const onSignIn = function (googleUser){
        console.log(googleUser,'.....................................................');
    }
  return (
    <div >
        <div className="g-signin2" data-onsuccess={onSignIn}></div>
    </div>
  );
};

export default Auth;
