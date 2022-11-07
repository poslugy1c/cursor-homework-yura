import React, { Component } from "react";
import TopPanel from "../TopPanel/TopPanel";
import LeftPanel from "../LeftPanel/LeftPanel";
import { connect } from "react-redux";
import addText from "../../redux/actions/add-text-action";
import exactWordsCollection from "../../redux/actions/text-parser-action";
import WordsList from "./WordsList";

class NewPost extends Component {
    render() {
        return (
            <div>
                <TopPanel />
                <div className='admin-page'>
                    <LeftPanel />
                    <div className='content'>
                        <textarea
                            cols="30"
                            rows="10"
                            onChange={e => this.props.addText(e.target.value)}
                        ></textarea>
                        <button className="parse-btn"
                            onClick={(this.props.exactWordsCollection)}
                        >Parse!</button>
                        <WordsList wordslist={this.props.words} />
                    </div>
                </div>
            </div>
        )
    }
}

const getStateToProps = state => {
    return {
        words: state.textParserReducer
    }
}

const mapDispatchToProps = dispatch => {
    return {
        addText: e => dispatch(addText(e)),
        exactWordsCollection: () => dispatch(exactWordsCollection())
    }
}

export default connect(getStateToProps, mapDispatchToProps)(NewPost);