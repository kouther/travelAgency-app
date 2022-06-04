import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from "./Components/Home";
import Contact from "./Components/ContactUs/Contact";
import About from "./Components/AboutUs/About";
import Header from "./Components/Header/Header";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter
} from "react-router-dom";



const App=()=>{

    return(
      <Router>
        <Header></Header>
        
        
          <Route path="/about" component={withRouter(About)}/>
          <Route path="/contact" component={withRouter(Contact)}/>
          <Route exact path="/" component={withRouter(Home)}/>
          {/* <Redirect to="/" /> */}
    </Router>
    );

}

export default App;