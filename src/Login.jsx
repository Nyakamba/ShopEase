import React, { Component } from "react";

export default class Login extends Component {
  constructor(props) {
    super(props);
    this.state = { email: "", password: "", message: "" };
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

        <div className="text-end">
          {this.state.message}
          <button className="btn btn-primary m-2" onClick={this.onLoginClick}>
            Login
          </button>
        </div>
      </div>
    );
  } //end of render method

  //executes when user clicks on login
  onLoginClick = async () => {
    console.log(this.state);

    var response = await fetch(
      `http://localhost:5000/users?email=${this.state.email} &password=${this.state.password}`
    );

    var body = await response.json();
    console.log(body);

    if (
      (this.state.email === "omwegaenock@gmail.com",
      this.state.password === "enock4501")
    ) {
      //success message to the user
      this.setState({
        message: <span className="text-success">Successfully Logged-in</span>,
      });
    } else {
      //error
      this.setState({
        message: (
          <span className="text-danger">Inavalid login please try again</span>
        ),
      });
    }
  };
}
