import React from "react";
import { Link } from "react-router-dom";
import { Segment, Button } from "semantic-ui-react";

function Navbar() {
    return(
        <Segment>
        <Button primary as={Link} to ="/">Search</Button>
        <Button secondary as={Link} to ="/saved">Saved</Button>
        </Segment>
    )
}

export default Navbar;