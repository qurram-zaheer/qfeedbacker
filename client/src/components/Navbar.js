import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Navbar extends Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return (
          <li>
            <a href="/auth/google">Login with Google</a>
          </li>
        );
      default:
        return (
          <>
            <li>
              <Payments />
            </li>
            <li style={{ margin: "0 10px" }}>Hi, {this.props.auth.name}</li>
            <li style={{ margin: "0 10px" }}>
              Credits: {this.props.auth.credits}
            </li>
            <li>
              <a href="/api/logout">Logout</a>
            </li>
          </>
        );
    }
  }
  render() {
    return (
      <div>
        <nav className="nav-wrapper deep-purple darken-2">
          <ul className="right">{this.renderContent()}</ul>
        </nav>
      </div>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}
export default connect(mapStateToProps)(Navbar);
