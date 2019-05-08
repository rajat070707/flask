import React, { Component } from 'react';
import {GoogleLogin} from 'react-google-login';

import './App.css';

class App extends Component {

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
   xhr.open('POST', 'http://192.168.1.151/token');
   xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
   xhr.onload = function() {
     console.log('Signed in as: ' + xhr.responseText);
   };
   xhr.send('idtoken=' + id_token);
  const tokenBlob = new Blob([JSON.stringify({access_token: response.accessToken}, null, 2)], {type : 'application/json'});
  const options = {
      method: 'POST',
      body: tokenBlob,
      mode: 'cors',
      cache: 'default'
  };
  fetch('http://192.168.1.163:8080/token',).then(r => {
      const token = r.headers.get('x-auth-token');
      r.json().then(user => {
          if (token) {
              this.setState({isAuthenticated: true, user, token})
          }
      });
  })
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
    <div className="header">
        <a href="#default" className="logo">NINELEAPS</a>
    </div> 
    <br></br><br></br>
<GoogleLogin

                        clientId='1024532208685-jpil180d402nt9fv6edn4ltti7li45pl.apps.googleusercontent.com'
                        buttonText="Login with google"
                        onSuccess={this.googleResponse}
                        onFailure={this.onFailure}
                    />
                </div>
            );

        return (
            <div className="App">
                {content}
            </div>
        )
    }
}

export default App;




