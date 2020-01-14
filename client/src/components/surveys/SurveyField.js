import React from "react";

export default ({ meta: { error, touched }, input, label }) => {
  return (
    <div>
      <label>{label}</label>
      <input {...input} style={{ marginBottom: "5px" }} />
      <div
        className="red-text "
        style={{ marginBottom: "20px", fontSize: "11px" }}
      >
        {touched && error}
      </div>
    </div>
  );
};
