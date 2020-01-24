import React, { Component } from "react";
import { reduxForm, Field } from "redux-form";
import _ from "lodash";
import { Link } from "react-router-dom";
import SurveyField from "./SurveyField";
import validateEmails from "../../utils/validateEmail";
import formFields from "./formFields";
import Reader from "../Reader";

class SurveyForm extends Component {
  constructor() {
    super();
    this.state = {
      data: [],
      csvFlag: false
    };
  }
  renderFields() {
    return _.map(formFields, ({ label, name }) => {
      if (this.state.csvFlag === true) {
        if (name === "recipients") {
          return (
            <div>
              <input
                type="text"
                name={name}
                value={this.state.data.join()}
                onChange={this.csvChange}
              />
              HI{" "}
            </div>
          );
        } else {
          return (
            <Field
              key={name}
              component={SurveyField}
              type="text"
              label={label}
              name={name}
            />
          );
        }
      } else {
        return (
          <Field
            key={name}
            component={SurveyField}
            type="text"
            label={label}
            name={name}
          />
        );
      }
    });
  }

  handleCSV = data => {
    this.setState({ data: data, csvFlag: true });
  };
  render() {
    return (
      <div className="container" style={{ paddingTop: "30px" }}>
        <form onSubmit={this.props.handleSubmit(this.props.onSurveySubmit)}>
          {this.renderFields()}
          <Reader enterCSV={this.handleCSV} />
          <div>
            {this.state.data.map(data => (
              <table>
                <tr>
                  <td>{data}</td>
                </tr>
              </table>
            ))}
          </div>
          <Link to="/surveys" className="btn-flat red lighten-1 white-text">
            Cancel
          </Link>
          <button className="teal btn-flat right white-text" type="submit">
            Next
            <i className="material-icons right " style={{ marginLeft: "0px" }}>
              chevron_right
            </i>
          </button>
        </form>
      </div>
    );
  }
}

function validate(values) {
  const errors = {};

  errors.recipients = validateEmails(values.recipients || "");
  _.each(formFields, ({ name }) => {
    if (!values[name]) {
      errors[name] = "This is a necessary field!";
    }
  });

  return errors;
}
export default reduxForm({
  validate,
  form: "surveyForm",
  destroyOnUnmount: false
})(SurveyForm);
