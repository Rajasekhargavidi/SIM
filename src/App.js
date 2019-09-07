import React, { Component } from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import WrappedNormalLoginForm from "./logins/Studentsln";
import WrappedRegistrationForm from "./logins/Studentreg";
import WrappedHorizontalLoginForm from "./logins/Forgot";
import DashBoard from "./DashBoard";
import FeeDetails from "./logins/FeeDetails";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <div className="header">
            <a href="/">
              <h1
                style={{
                  color: "white",
                  fontWeight: "bolder",
                  fontSize: "80px",
                  fontFamily: "none",
                  WebkitTextStrokeWidth: "thick",
                  textAlign: "center"
                }}
              >
                SIM
              </h1>
            </a>
          </div>
          <Switch>
            <Route exact path="/" component={DashBoard} />
            <Route path="/Studentsln.js" component={WrappedNormalLoginForm} />
            <Route path="/Studentreg.js" component={WrappedRegistrationForm} />
            <Route path="/Forgot.js" component={WrappedHorizontalLoginForm} />
            <Route path="/Studentsln.js" component={WrappedNormalLoginForm} />
            <Route path="/FeeDetails.js" component={FeeDetails} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
