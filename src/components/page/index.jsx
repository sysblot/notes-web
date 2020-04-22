import React from 'react';

import './style.css';

const Page = function ({ note, editable, onEdit }) {
  return (
    <div className="page-container">
      <div
        className="page-header"
        contentEditable={editable}
        onBlur={onEdit.bind(null, 'name')}
      >
        {note.name}
      </div>
      <div
        className="page"
        contentEditable={editable}
        onBlur={onEdit.bind(null, 'content')}
      >
        {note.content}
      </div>
    </div>
  );
};

export default Page;
