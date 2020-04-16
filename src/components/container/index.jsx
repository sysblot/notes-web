import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";

import { getNotes, createNote } from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons'
import './style.css';

class Container extends React.Component {
    constructor(props) {
        super(props);
        this.state = { notes: [] };
        getNotes().then(async response => this.setState({ notes: await response.json() }))
        this.addNote = this.addNote.bind(this)
    }

    addNote = function () {
        // createNote({ name: 'my note', content: "This isanother note created" })
        // getNotes().then(async response => this.setState({ notes: await response.json() }))
    }

    render() {
        return (<div className="container">
            <Router>
                <Switch>
                    <Route path="/">
                        <>
                            <Link to="/create">
                                <AddFile onClick={this.addNote} />
                            </Link>
                            {this.state.notes.map((note) => <File noteName={note.name} />)}
                        </>
                    </Route>
                    <Route path="/create">
                        <div>Create</div>
                    </Route>
                </Switch>
            </Router>
        </div>)
    }
}

const File = function ({ noteName }) {

    return (
        <div className="icon-wrapper">
            <FontAwesomeIcon icon={faFile} className="container-icon" size="3x" />
            <span>{noteName}</span>
        </div>
    )
}

const AddFile = function ({ onClick }) {

    return (
        <div className="icon-wrapper" onClick={onClick}>
            <FontAwesomeIcon icon={faFile} className="container-icon" size="3x" />
            <span className="add-icon">+</span>
        </div>
    )
}

export default Container;