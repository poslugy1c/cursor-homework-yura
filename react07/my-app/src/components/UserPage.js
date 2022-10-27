import { Component } from "react";
import Header from "./Header";

export default class UserPage extends Component {
    render() {
        const index = this.props.match.params.id
        console.log(index, 'index')
        const baseUrl = this.props.location.pathname
        return (
            <div>
                <Header url={baseUrl} />
                <div className="user"></div>
            </div>
        )
    }
}