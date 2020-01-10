import React from "react";
import { BrowserRouter, Route } from "react-router-dom";

const Header = () => {
  return <h2>HEADER</h2>;
};

const Dashboard = () => {
  return <h2>DASHBOARD</h2>;
};

const SurveyNew = () => {
  return <h2>SURVEY NEW</h2>;
};
const Landing = () => {
  return <h2>LANDING</h2>;
};

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <div>
          <Header />
          <Route exact path="/" component={Landing} />
          <Route exact path="/surveys" component={Dashboard} />
          <Route path="/surveys/new" component={SurveyNew} />
          {/* <Route path="/" component={Landing} /> */}
        </div>
      </BrowserRouter>
    </div>
  );
};

export default App;
