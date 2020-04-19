import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import { getNotes } from '../../api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFile } from '@fortawesome/free-solid-svg-icons';
import './style.css';
import Editor from '../editor';

class Container extends React.Component {
  constructor(props) {
    super(props);
    this.state = { notes: [] };
    getNotes().then(async (response) =>
      this.setState({ notes: await response.json() })
    );
  }

  render() {
    return (
      <div className="container">
        <Router>
          <Switch>
            <Route path="/notes/:note_id" component={(props) => <Editor props={{ ...props, new: false }} />} />
            <Route
              path="/create"
              component={(props) => <Editor props={{ ...props, new: true }} />}
            ></Route>
            <Route path="/notes">
              <Link to="/create">
                <AddFile />
              </Link>
              {this.state.notes.map((note, index) => (
                <Link to={`/notes/${note.id}`} key={index}>
                  <File noteName={note.name} key={index} />
                </Link>
              ))}
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

const File = function ({ noteName }) {
  return (
    <div className="icon-wrapper">
      <FontAwesomeIcon icon={faFile} className="container-icon" size="3x" />
      <span>{noteName}</span>
    </div>
  );
};

const AddFile = function () {
  return (
    <div className="icon-wrapper">
      <FontAwesomeIcon icon={faFile} className="container-icon" size="3x" />
      <span className="add-icon">+</span>
    </div>
  );
};

export default Container;
