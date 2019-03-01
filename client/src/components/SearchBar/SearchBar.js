import React, { Component } from "react";
import { Segment, Form } from "semantic-ui-react";

class SearchBar extends Component {

    state = {
        title: "",
        author: "",
    }

    // Add a class method to handle updating the value of state to match what the user types.
    handleChange = event => {
        // const field = event.target.name // title || author
        // const newValue = event.target.value // Whatever the user is typing in

        // this.setState({ [field]: newValue });

        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit = event => {
        event.preventDefault();
        // collect data and send search query to api
        const searchOptions = this.state;
        
    }

    render() {
        return (
            <Segment>
                <Form onSubmit={this.handleSubmit}>
                    <Form.Group inline>
                        <Form.Input
                            value={this.state.title}
                            onChange={this.handleInputChange}
                            name="title"                    // This attribute is important as helps keep state in sync
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