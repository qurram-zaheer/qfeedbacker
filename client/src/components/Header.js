import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import Payments from "./Payments";

class Header extends Component {
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
          <Link
            to={this.props.auth ? "/surveys" : "/"}
            className="left brand-logo"
            style={{ paddingLeft: "4px" }}
          >
            qFeedbacker
          </Link>
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
export default connect(mapStateToProps)(Header);
