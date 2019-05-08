import React, { Component } from 'react';
import { GoogleLogin } from "react-google-login";
import Axios from "axios";


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



googleResponse = (googleResponse) => {
    Axios.post("http://192.168.43.18:8080/token?tokenId="+googleResponse.getAuthResponse().id_token)
    .then(response =>{
        window.localStorage.setItem("tokenid", googleResponse.getAuthResponse().id_token);
        let token=window.localStorage.getItem("tokenid");
        console.log(token)

        console.log("signedin as:"+JSON.stringify(response));

             window.location.href="/page2";  

        }
    )
};


//    window.localStorage.setItem("tokenId", id_token);
//   window.localStorage.setItem("email", response.profileObj.email);
//   window.localStorage.setItem("name", response.profileObj.name);
//   window.localStorage.setItem("googleId", response.profileObj.googleId);
//   let token = window.localStorage.getItem("tokenId");


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







