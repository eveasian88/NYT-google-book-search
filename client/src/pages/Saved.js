import React from "react";
import { Grid } from "semantic-ui-react";
import SearchResults from "../components/SearchResults/SearchResults"

class Saved extends React.Component {

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