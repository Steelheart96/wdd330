import React from "react";
import { Link } from "react-router-dom";

import "./navigation.styles.css";

function Navigation() {
    return (
        <>
            <div className="sidenav">
                <h1>This is the Navigation</h1>
                <Link className="nav-link" to="/">Home</Link>
                <Link className="nav-link" to="/projects">Projects</Link>
            </div>
        </>
    )
}

export default Navigation;