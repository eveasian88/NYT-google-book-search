import React from "react";
import { Segment } from "semantic-ui-react";

class SearchResults extends React.Component {

    state={
        term: "",
    }

    render() {
        return (
            <Segment>
                Search Results
            </Segment>
        )
    }
}

export default SearchResults;