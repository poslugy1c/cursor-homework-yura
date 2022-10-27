import { Component } from "react";
import Header from "./Header";
import { users } from "../service"
import { Link } from "react-router-dom";

export default class UsersPage extends Component {
    render() {
        const baseUrl = this.props.location.pathname
        return (
            <div>
                <Header url={baseUrl} />
                <button onClick={() => this.props.history.goBack()}>Back</button>
                {
                    users.map(user => (
                        <div key={user.id} className="user">
                            <strong>{user.name}</strong>
                            <p>Comments: {user.comments}</p>
                            <Link to={`/users/${user.id}`}>to user</Link>
                        </div>
                    ))
                }
            </div>
        )
    }
}