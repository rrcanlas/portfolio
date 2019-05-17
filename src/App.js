import React, { Component } from 'react';
import Navbar from "./component/Navbar/Navbar";
import Footer from "./component/Footer/Footer";
import "./App.scss";
import Worklist from "./component/Worklist";
import Contactlist from "./component/Contactlist";
import About from "./component/About/About";
import Contact from "./component/Contact/Contact";
import Error from "./component/Error/Error";

import { BrowserRouter, Switch, Route } from 'react-router-dom'

class App extends Component {
  render() {
  	return (
  		<BrowserRouter>
        <div>
          <Navbar />
          <Switch>
            <Route path="/" activeClassName="active" component={About} exact={true} />
            <Route path="/works" component={Worklist} />
            <Route path="/contact" component={Contactlist} />
            <Route component={Error} />
          </Switch> 
          <Footer />
        </div>
      </BrowserRouter>
  	); 		
  }     
}

export default App;



