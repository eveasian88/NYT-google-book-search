import React from "react";
import { Segment } from "semantic-ui-react";

class SearchBar extends React.Component {

    state={
        term: "",
    }

    render() {
        return (
            <Segment>
                Search Bar
            </Segment>
        )
    }
}

export default SearchBar;