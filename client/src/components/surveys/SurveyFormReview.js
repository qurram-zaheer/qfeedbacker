import React from "react";
import _ from "lodash";
import { connect } from "react-redux";
import formFields from "./formFields";
import { withRouter } from "react-router-dom";
import * as actions from "../../actions";
const SurveyFormReview = ({ onCancel, formValues, submitSurvey, history }) => {
  const reviewFields = _.map(formFields, ({ name, label }) => {
    return (
      <div key={name}>
        <label>{label}</label>
        <div>{formValues[name]}</div>
      </div>
    );
  });

  return (
    <div className="container">
      <h4>Please confirm your entries</h4>
      {reviewFields}
      <button
        className="btn-flat orange darken-3 white-text"
        onClick={onCancel}
      >
        Back
      </button>
      <button
        className="btn-flat green right white-text"
        onClick={() => submitSurvey(formValues, history)}
      >
        Submit Survey
        <i className="material-icons right">email</i>
      </button>
    </div>
  );
};

function mapStateToProps(state) {
  return { formValues: state.form.surveyForm.values };
}
export default connect(mapStateToProps, actions)(withRouter(SurveyFormReview));
