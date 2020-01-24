import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import Header from "./Header";
import { connect } from "react-redux";
import * as actions from "../actions";
import Landing from "./Landing";
import Dashboard from "./Dashboard";
import "../App.css";
import SurveyNew from "./surveys/SurveyNew";

class App extends React.Component {
  componentDidMount() {
    this.props.fetchUser();
  }

  render() {
    return (
      <BrowserRouter>
        <div>
          <Header />
          <Route
            exact
            path="/"
            render={props => <Landing {...props} auth={this.props.auth} />}
          />

          <Route
            exact
            path="/surveys"
            render={props => <Dashboard {...props} auth={this.props.auth} />}
          />
          <Route path="/surveys/new" component={SurveyNew} />
        </div>
      </BrowserRouter>
    );
  }
}

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps, actions)(App);
