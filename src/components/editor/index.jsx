import React from 'react';

import './style.css';
import ToolBox from '../toolBox';
import Page from '../page';
import { getNote } from '../../api';

class Editor extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = { note: {} };
    if (!props.new)
      getNote(props.location.pathname).then(async (response) =>
        this.setState({ note: await response.json() })
      );
  }

  render() {
    return (
      <div className="editor">
        <ToolBox />
        <Page note={this.state.note} />
      </div>
    );
  }
}

export default Editor;
