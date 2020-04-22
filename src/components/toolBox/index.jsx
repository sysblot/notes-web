import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSave, faPencilAlt } from '@fortawesome/free-solid-svg-icons';

import React from 'react';

import '../toolBox';

import './style.css';

const ToolBox = function ({ onSave, onEdit }) {
  return (
    <div className="tool-box">
      <div className="tool-box-icon-container">
        <FontAwesomeIcon
          icon={faSave}
          size="2x"
          className="tool-box-icon"
          onClick={onSave}
        />
        Save
      </div>
      <div className="tool-box-icon-container">
        <FontAwesomeIcon
          icon={faPencilAlt}
          size="2x"
          className="tool-box-icon"
          onClick={onEdit}
        />
        Save
      </div>
    </div>
  );
};

export default ToolBox;
