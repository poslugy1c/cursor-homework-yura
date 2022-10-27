import { Component } from "react";
import Nav from "./Nav";

export default class Header extends Component {
    render() {
        const { url } = this.props
        return (
            <div className="header">
                <h1>Logo</h1>
                <Nav />
                {
                    url === '/users' ? <button className="btn">Add user</button> : <></>
                }
            </div>
        )
    }
}