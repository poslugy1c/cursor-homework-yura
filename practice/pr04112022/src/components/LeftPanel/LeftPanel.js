import React from 'react';
import { NavLink } from "react-router-dom";


function LeftPanel() {
    return (
        <ul className="left-panel">
            <li><NavLink to='/'>New Post</NavLink></li>
            <li><NavLink to='/posts'>Posts</NavLink></li>
            <li><NavLink to='/docs'>Docs</NavLink></li>
        </ul>
    )
}

export default LeftPanel;