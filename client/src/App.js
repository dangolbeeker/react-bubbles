import React, { useState } from "react";
import { BrowserRouter as Router, Route, Link, Redirect } from "react-router-dom";
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

const ProtectedRoute = ({ component: Component, ...rest }) => {
  return <Route {...rest} render={props => {
    if (localStorage.getItem('token')) {
      return <Component {...props} />;
    } else {
      return <Redirect to="/" />;
    }
  }} />;
};

const protectRoute = Component => props => {
  if (localStorage.getItem('token')) {
    return <Component {...props} />;
  } else {
    return <Redirect to="/" />;
  }
};

const ProtectedBubblePage = protectRoute(BubblePage);



function App() {
  const [colorList, setColorList] = useState([]);
  return (
      <div className="App">
        <Route exact path="/" component={Login} />
      <Route path="/bubblepage" component={ProtectedBubblePage}/>
      </div>
  );
}

export default App;