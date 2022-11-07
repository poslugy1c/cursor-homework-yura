import React from 'react'
import TopPanel from "../TopPanel/TopPanel";
import LeftPanel from "../LeftPanel/LeftPanel";

function Docs() {
    return (
        <div>
            <TopPanel />
            <div className="admin-page">
                <LeftPanel />
                <div className="content">
                    <h1>Documentation</h1>
                </div>
            </div>
        </div>
    )
}

export default Docs;