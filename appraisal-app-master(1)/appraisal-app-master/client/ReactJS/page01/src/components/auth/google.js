import React, { Component } from 'react';
import { GoogleLogin } from "react-google-login";

import './Google.css';

class  Google extends Component {

  constructor(props) {
      super(props);
      this.state = { isAuthenticated: false, user: null, token: ''};
      
  }

  logout = () => {
      this.setState({isAuthenticated: false, token: '', user: null})
  };

  onFailure = (error) => {
      console.log('dsfsafafdf')
      alert(error);
};


googleResponse = (response) => {
   console.log(response);
   let id_token = response.getAuthResponse().id_token;
   var xhr = new XMLHttpRequest();
   xhr.open('POST', 'http://192.168.1.163:8080/token');
   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
   xhr.onload = function() {
   console.log('Signed in as: ' + xhr.responseText);
   };
   xhr.send('idtoken=' + id_token);
  
};

render() {
  let content = !!this.state.isAuthenticated ?
          (
              <div>
                  <p>Authenticated</p>
                  <div>
                      {this.state.user.email}
                  </div>
                  <div>
                      <button onClick={this.logout} className="button">
                          Log out
                      </button>
                  </div>
              </div>
          ) :
(
<div>
   
<GoogleLogin

                        clientId='1024532208685-jpil180d402nt9fv6edn4ltti7li45pl.apps.googleusercontent.com'
                        buttonText="Login with google"
                        onSuccess={this.googleResponse}
                        onFailure={this.onFailure}
                    />
                </div>
            );

        return (
            <div className="Google">
                {content}
            </div>
        )
    }
}

export default Google;







