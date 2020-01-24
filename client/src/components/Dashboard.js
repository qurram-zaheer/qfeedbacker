import React from "react";
import SurveyList from "./surveys/SurveyList";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const Dashboard = props => {
  return (
    <div className="container">
      <SurveyList />

      <div className="fixed-action-btn">
        <Link
          to="/surveys/new"
          className="waves-effect waves-light btn-large grow"
          href="#"
        >
          <i className="material-icons">add</i>
        </Link>
      </div>
    </div>
  );
};

function mapStateToProps({ auth }) {
  return {
    auth
  };
}

export default connect(mapStateToProps)(Dashboard);
