import React, { Component } from "react";
import { Link } from "react-router-dom";

class DashBoard extends Component {
  render() {
    return (
      <div>
        <div
          className="mainbar"
          style={{ backgroundColor: "brown", color: "#bdb496" }}
        >
          <div className="ui frame" style={{ paddingTop: "150px" }}>
            <div style={{ display: "flex" }}>
              <div>
                <Link to="/Studentsln.js">
                  <h2
                    style={{
                      paddingLeft: "150px"
                    }}
                  >
                    <img src="/stdlogo.jpg" alt="" />
                    <strong>Student Login</strong>
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="/Studentsln.js">
                  <h2 style={{ textAlign: "end", paddingLeft: "500px" }}>
                    <strong>Teacher Login</strong>
                  </h2>
                </Link>
              </div>
            </div>
            <div style={{ display: "flex", paddingTop: "50px" }}>
              <div>
                <Link to="/Studentsln.js">
                  <h2 style={{ textAlign: "start", paddingLeft: "150px" }}>
                    <strong>Principal Login</strong>
                  </h2>
                </Link>
              </div>
              <div>
                <Link to="/FeeDetails.js">
                  <h2 style={{ textAlign: "right", paddingLeft: "490px" }}>
                    <strong>Student Details</strong>
                  </h2>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default DashBoard;
