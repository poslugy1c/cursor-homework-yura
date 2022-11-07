import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import "./top-panel.scss";
import { mapDispatchToPropsFactory } from "react-redux/es/connect/mapDispatchToProps";
import saveWords from "../../redux/actions/save-words-action";

class TopPanel extends Component {
    render() {
        return (
            <div className="top-panel">
                <Link to='/'>Words Extraction Admin </Link>
                <button onClick={this.props.saveWords}>Save</button>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveWords: () => dispatch(saveWords())
    }
}

export default connect(null, mapDispatchToProps)(TopPanel);