import React, { Component } from "react";

import "./App.css";
import firebase from "firebase";
import StyledFirebaseAuth from "react-firebaseui/StyledFirebaseAuth";

firebase.initializeApp({
  apiKey:'AIzaSyBmt_Y7IxLJxZFTdIUvawhWkv8tnTPGSMM',
  authDomain:'login2-e20af.firebaseapp.com'

})

class App extends Component {
  state = { isSignedIn: false };
  uiConfig = {
    signInFlow: "popup",
    signInOptions:[ firebase.auth.GoogleAuthProvider.PROVIDER_ID],
    callbacks: {
      signInSuccess: () => false
    }
  };

  componentDidMount = () => {
   
    firebase.auth().onAuthStateChanged(user => {
      this.setState({ isSignedIn: !!user });
      console.log('user',user)
    });
  };
  render() {
    return (
      <div className="App">
        {this.state.isSignedIn ? (
          <span>
          <div>Signed In</div>
          <button onClick={()=>firebase.auth().signOut()}>Sign Out</button>
          <h1>Welcome {firebase.auth().currentUser.displayName}</h1>
          <h1>Welcome {firebase.auth().currentUser.displayEmail}</h1>
          </span>
        ) : (
          <StyledFirebaseAuth
            uiConfig={this.uiConfig}
            firebaseAuth={firebase.auth()}
          />
        )}
      </div>
    );
  }
}

export default App;
