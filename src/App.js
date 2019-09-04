import React, { Component } from "react";

class App extends Component {
  render() {
    return (
      <div className="mainbar">
        <div className="header">
          SIM
          <img
            href=""
            alt="sim theme"
            style={{ width: "500px", height: "300px" }}
          />
        </div>
        <div className="ui frame">
          <span>Students logins</span>
          <br />
          <span>Teachers logins</span> <br />
          <span>Principal logins</span> <br />
          <span>Fee logins</span>
        </div>
      </div>
    );
  }
}

export default App;
