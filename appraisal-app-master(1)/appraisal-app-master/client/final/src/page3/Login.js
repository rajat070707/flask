import React, { Component } from "react";
import axios from "axios";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailId: "",
      password: "",
      users: undefined
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  handleChange(e) {
    let target = e.target;
    let value = target.type === "checkbox" ? target.checked : target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }
  handleClick() {
    let body = {
      emailId: this.state.emailId,
      password: this.state.password
    };
    let header = {
      "Control-Allow-Origin": "*"
    };
    axios
      .post("http://192.168.1.151:8080/v1/login", body, header)
      .then(function(response) {
        this.setState({
          users: response.data
        });
      });
  }

  handleSubmit(e) {
    e.preventDefault();
    console.log("The form was submitted with the following data:");
    console.log(this.state);
  }
  render() {
    return (
      <div>
        <div className="header">
          <h1>Login</h1>
        </div>
        <div className="form">
          <form onSubmit={this.handleSubmit}>
            <div>
              <label htmlFor="emailId">Email ID:</label>
              <input
                type="email"
                placeholder="Enter your EmailID"
                name="emailId"
                required
                value={this.state.emailId}
                onChange={this.handleChange}
              />
            </div>
            <div className="pwd">
              <label htmlFor="password">Password:</label>
              <input
                type="password"
                placeholder="Enter your password"
                name="password"
                required
                value={this.state.password}
                onChange={this.handleChange}
              />
              <div className="button">
                <button type="Submit" onClick={this.handleClick}>
                  LOGIN
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
