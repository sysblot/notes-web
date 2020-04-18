import React from 'react';

import './style.css';

const Page = function ({ note }) {
  return (
    <div className="page-container">
      <div className="page" contentEditable="true">
        {note.content}
      </div>
    </div>
  );
};

export default Page;
