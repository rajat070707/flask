import React, { Component } from "react";
import "./App.css";

import { GoogleLogin } from "react-google-login";

class App extends Component {
  constructor() {
    super();
    this.state = { isAuthenticated: false, user: null, token: "" };
  }

  logout = () => {
    this.setState({ isAuthenticated: false, token: "", user: null });
  };

  googleResponse = response => {
    console.log(response);
    let id_token = response.getAuthResponse().id_token;
    var xhr = new XMLHttpRequest();
    xhr.open('POST', 'http://192.168.1.163:8080/token');
    xhr.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded');
    xhr.onload = function() {
    console.log('Signed in as: ' + xhr.responseText);

};
xhr.send('idtoken=' + id_token);
    let header = {
      "Control-Allow-Origin": "*"
    };
    const tokenBlob = new Blob(
      [JSON.stringify({ access_token: response.accessToken }, null, 2)],
      { type: "application/json" }
    );
    const options = {
      method: "POST",
      body: tokenBlob,
      mode: "cors",

      cache: "default"
    };
    // fetch("http://192.168.1.163:8080/token").then(r => {
    //   const token = r.headers.get("x-auth-token");
    //   r.json().then(user => {
    //     if (token) {
    //       this.setState({ isAuthenticated: true, user, token });
    //     }
    //   });
      
    // });
  };
  onFailure = error => {
    console.log("****************");
    alert(error);
  };
  render() {
    let content = !!this.state.isAuthenticated ? (
      <div>
        <p>Authenticated</p>

        <div>{this.state.user.email}</div>
        <div>
          <button onClick={this.googleResponse} className="button">
            Log out
          </button>
        </div>
      </div>
    ) : (
      <div className='login'>
        <h1>Nineleaps</h1>
        <h2>Login via Google : )</h2>
        <h3></h3>
        <GoogleLogin
          clientId="467598396544-usbqpbfg4h2v6282tdr64dgim05klu5v.apps.googleusercontent.com"
          buttonText="Login"
          onSuccess={this.googleResponse}
          onFailure={this.onFailure}
        />
      </div>
    );

    return <div className="App">{content}</div>;
  }
}

export default App;
