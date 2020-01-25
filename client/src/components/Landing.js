import React from "react";
import { colImg, recImg, feedback, create } from "../assets";
import { Link } from "react-router-dom";

class Landing extends React.Component {
  renderContent() {
    switch (this.props.auth) {
      case null:
        return;
      case false:
        return;
      default:
        return (
          <Link to="/surveys">
            <button className="btn blue lighten-2 right">
              Go to dashboard
            </button>
          </Link>
        );
    }
  }
  render() {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Feedbacker</h2>

        <div className="row" style={{ paddingTop: "30px" }}>
          <div className="col s4">
            <div className="card z-depth-0 " style={{ width: "100%" }}>
              <img
                src={create}
                style={{ width: "300px", height: "300px" }}
              ></img>
            </div>
          </div>
          <div
            className="col left-align"
            style={{
              paddingTop: "35px",
              fontSize: "100px",
              color: "blue"
            }}
          >
            <img src="https://img.icons8.com/color/48/000000/1-circle-c--v1.png"></img>
          </div>
          <div className="col s3 left-align" style={{ paddingTop: "100px" }}>
            Getting started is simple, for the first step, just create a survey
            with all of your email recipients!
            <div className="row">{this.renderContent()}</div>
          </div>
        </div>
        <div className="row">
          <div
            className="col s3 right-align offset-s4"
            style={{ paddingTop: "100px" }}
          >
            Just submit the survey to us and relax, we'll take care of sending
            the emails out for you
          </div>
          <div
            className="col right-align"
            style={{
              paddingTop: "35px",
              fontSize: "100px",
              color: "blue"
            }}
          >
            <img src="https://img.icons8.com/color/48/000000/2-circle-c.png"></img>
          </div>
          <div className="col s4">
            <div className="card z-depth-0">
              <img
                src={colImg}
                style={{ width: "300px", height: "300px" }}
              ></img>
            </div>
          </div>
        </div>
        <div className="row" style={{ paddingTop: "30px" }}>
          <div className="col s4">
            <div className="card z-depth-0 " style={{ width: "100%" }}>
              <img
                src={feedback}
                style={{ width: "300px", height: "300px" }}
              ></img>
            </div>
          </div>
          <div
            className="col left-align"
            style={{
              paddingTop: "35px",
              fontSize: "100px",
              color: "blue"
            }}
          >
            <img src="https://img.icons8.com/color/48/000000/3-circle-c.png"></img>
          </div>
          <div className="col s3 left-align" style={{ paddingTop: "100px" }}>
            Customers will recieve your survey as an interactive email, and
            we'll record their feedback in near real time
          </div>
        </div>
        <div className="row">
          <div
            className="col s3 right-align offset-s4"
            style={{ paddingTop: "100px" }}
          >
            All the collected feedback is will be visible on your dashboard. As
            easy as that?
          </div>
          <div
            className="col right-align"
            style={{
              paddingTop: "35px",
              fontSize: "100px",
              color: "blue"
            }}
          >
            <img src="https://img.icons8.com/color/48/000000/4-circle-c.png"></img>
          </div>
          <div className="col s4">
            <div className="card z-depth-0">
              <img
                src={recImg}
                style={{ width: "300px", height: "300px" }}
              ></img>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Landing;
