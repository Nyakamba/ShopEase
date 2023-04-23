import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "omwegaenock@gmail.com", password: "Enock4501" };
  }
  render() {
    return (
      <div className="col-lg-9">
        <h4 className="m-1 p-2 border-bottom">Login</h4>
        {/*Email starts */}
        <div className="form-group row m-2">
          <label className="col-sm-2 col-form-label">Email</label>
          <input
            type="text"
            className="form-control"
            value={this.state.email}
            onChange={(event) => {
              this.setState({ email: event.target.value });
            }}
          />
        </div>
        {/*Email ends here */}

        {/*Password starts  here*/}
        <div className="form-group row m-2">
          <label className="col-lg-4">Password</label>
          <input
            type="password"
            className="form-control"
            value={this.state.password}
            onChange={(event) => {
              this.setState({ password: event.target.value });
            }}
          ></input>
        </div>
        {/*Password ends */}

        <div>
          <button className="btn btn-primary m-2" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  } //end of render method

  //executes when user clicks on login
  onLoginClick = () => {
    console.log(this.state);
  };
}
