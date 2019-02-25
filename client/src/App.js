import React from 'react';
// import axios from 'axios';
import Saved from "./pages/Saved";
import Search from "./pages/Search";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Grid } from "semantic-ui-react";

// import Books from "./pages/Books";
// import Detail from "./pages/Detail";
import NoMatch from "./pages/NoMatch";


class App extends React.Component {

  render() {
    return (

      <Router>
        <Grid centered>
          <Grid.Row>
            <Navbar />
          </Grid.Row>

          <Grid.Row>
            <Grid.Column>
          <Switch >
            <Route exact path="/" component={Search} />
            <Route path="/saved" component={Saved} />
            {/* <Route path="/books" component={Books} />
            <Route path="/books/:id" component={Detail} /> */}
            <Route component={NoMatch} />
          </Switch>
          </Grid.Column>
          </Grid.Row>

        </Grid>
      </Router>
    );
  }
}

export default App;
