import { Component } from "react";
import { NavLink } from "react-router-dom";

export default class Nav extends Component {
    render() {
        return (
            <div>
                <ul className="nav">
                    <li><NavLink to={'/'}>Home</NavLink></li>
                    <li><NavLink to={'/about'}>About</NavLink></li>
                    <li><NavLink to={'/users'}>Users</NavLink></li>
                </ul>
            </div>
        )
    }
}