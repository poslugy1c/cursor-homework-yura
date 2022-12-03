import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <nav>
                <Link to="/" className="link">
                    Main
                </Link>
                {/* <Link to="/phote" className="link">
                    Photos
                </Link> */}
                <Link to="/about" className="link">
                    Posts
                </Link>
                {/* <Link to="/users" className="link">
                    Users
                </Link> */}
            </nav>
        );
    }
}