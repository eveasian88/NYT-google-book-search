import React from "react";
import { Segment, Form } from "semantic-ui-react";

class SearchResults extends React.Component {
    state={
        term: "",
    }

    render() {
        return (
            <Segment>
                <Form.Field>
                Search Results
                </Form.Field>
            </Segment>
        )
    }
}

export default SearchResults;