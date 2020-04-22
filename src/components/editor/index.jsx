import React from 'react';

import Page from '../page';
import ToolBox from '../toolBox';
import { getNote, saveNote, createNote } from '../../api';

import './style.css';

class Editor extends React.Component {
  constructor({ props }) {
    super(props);
    this.state = { note: { name: '', content: '' }, editable: false };
    if (!props.new)
      getNote(props.location.pathname).then(async (response) =>
        this.setState({ note: await response.json() })
      );
    this.onSave = this.onSave.bind(this);
    this.onEdit = this.onEdit.bind(this);
    this.makeNoteEditable = this.makeNoteEditable.bind(this);
  }

  makeNoteEditable = function () {
    this.setState({ ...this.state, editable: true });
  };

  onSave = function () {
    const { id, name, content } = this.state.note;
    const payload = { name, content };
    if (id) {
      saveNote(id, payload);
      return;
    }
    createNote(payload);
  };

  onEdit = function (field, event) {
    const newContent = event.currentTarget.textContent;
    this.setState({
      ...this.state,
      note: { ...this.state.note, [field]: newContent },
    });
  };

  render() {
    const { note, editable } = this.state;
    return (
      <div className="editor">
        <ToolBox onSave={this.onSave} onEdit={this.makeNoteEditable} />
        <Page
          note={note}
          editable={note.id ? editable : true}
          onEdit={this.onEdit}
        />
      </div>
    );
  }
}

export default Editor;
