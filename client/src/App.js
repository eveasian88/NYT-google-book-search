import React, { Component } from 'react';
import axios from 'axios';
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Books from "./pages/Books";
import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";


class App extends Component {

  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Route exact path="/" component={Search} />
          <Route exact path="/saved" component={Saved} />
          <Route exact path="/" component={Books} />
          <Route exact path="/books" component={Books} />
          <Route exact path="/books/:id" component={Detail} />
          <Route component={NoMatch} />
        </div>
      </Router>
    );
  }
}

export default App;
