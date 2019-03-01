import React, { Component } from "react";
import { Grid } from "semantic-ui-react";
import SearchBar from "../components/SearchBar/SearchBar";


class Search extends Component {

    render(){
        return(
            <Grid>
                <Grid.Row centered>
                   <SearchBar />
                </Grid.Row>
                <Grid.Row centered>
                    Search Results
                </Grid.Row>
            </Grid>
        )
    }
}

export default Search;
