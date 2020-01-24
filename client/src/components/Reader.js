import React from "react";
import CSVReader from "react-csv-reader";

const Reader = props => {
  return <CSVReader onFileLoaded={data => props.enterCSV(data)} />;
};

export default Reader;
