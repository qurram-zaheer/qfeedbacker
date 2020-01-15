import React, { Component } from "react";
import { connect } from "react-redux";
import { fetchSurveys } from "../../actions";

class SurveyList extends Component {
  componentDidMount() {
    this.props.fetchSurveys();
  }

  renderSurveys() {
    console.log(this.props.survey);
    return this.props.surveys.reverse().map(survey => {
      return (
        <div className="card darken-1 " key={survey._id}>
          <div className="card-content">
            <span className="card-title">{survey.title}</span>
            <p>{survey.body}</p>
            <p className="right">
              Sent on: {new Date(survey.dateSent).toLocaleDateString()}
            </p>
          </div>
          <div className="card-action blue-grey lighten-4">
            <a style={{ color: "darkblue" }} href="">
              Yes: {survey.yes}
            </a>
            <a style={{ color: "maroon" }} href="">
              No: {survey.no}
            </a>
          </div>
        </div>
      );
    });
  }
  render() {
    return (
      <div>
        <nav className="teal" style={{ paddingBottom: "40px" }}>
          <div className="nav-wrapper">
            <h5 style={{ paddingTop: "20px", paddingLeft: "15px" }}>
              Your surveys:
            </h5>
          </div>
        </nav>
        {this.renderSurveys()}
      </div>
    );
  }
}

function mapStateToProps({ surveys }) {
  return { surveys };
}
export default connect(mapStateToProps, { fetchSurveys })(SurveyList);
