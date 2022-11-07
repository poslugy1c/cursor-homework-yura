import React, { Component } from "react";
import TopPanel from "../TopPanel/TopPanel";
import LeftPanel from "../LeftPanel/LeftPanel";

class Posts extends Component {
    render() {
        return (
            <div>
                <TopPanel />
                <div className="admin-page">
                    <LeftPanel />
                    <div className="content">
                        Posts
                    </div>
                </div>
            </div>
        )
    }

}

export default Posts;