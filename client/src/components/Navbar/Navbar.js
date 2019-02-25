import React, { Component } from "react";
import { Link } from "react-router-dom";

function Navbar() {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <Link className="navbar-brand" to ="/">Search</Link>
        <Link className="navbar-brand" to ="/saved">Saved</Link>
        </nav>
    )
}

export default Navbar;