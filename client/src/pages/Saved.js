import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import SearchResults from "../components/SearchResults/SearchResults"

class Saved extends Component {

    render() {
        return (
            <Grid>
                <Grid.Row centered>
                    <SearchResults />
                </Grid.Row>
                <Grid.Row centered>
                    Saved Books
                </Grid.Row>
            </Grid>
        );
    }
}

export default Saved;