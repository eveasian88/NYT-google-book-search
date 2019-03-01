import React from "react";
import { Segment, Form } from "semantic-ui-react";

class SearchBar extends React.Component {

    state = {
        term: "",
    }

    render() {
        return (
            <Segment>
                <Form>
                    <Form.Group inline>
                        <Form.Input
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"
                            placeholder="Title (required)"
                        />
                        <Form.Input
                            value={this.state.author}
                            onChange={this.handleInputChange}
                            name="author"
                            placeholder="Author (required)"
                        />
                    </Form.Group>
                    <Form.Group>
                        <Form.TextArea
                            value={this.state.synopsis}
                            onChange={this.handleInputChange}
                            name="synopsis"
                            placeholder="Synopsis (Optional)"
                        />
                        <Form.Button
                            disabled={!(this.state.author && this.state.title)}
                            onClick={this.handleFormSubmit}
                        >
                            Submit Book
                        </Form.Button>  
                    </Form.Group>

                </Form>
            </Segment>
        )
    }
}

export default SearchBar;