/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";

const Notes = ({ id, text, editButton, deleteButton }) => {
  return (
    <div className="note">
      <div className="note-body">{text}</div>
      <div className="note-footer">
        <button className="note-save" onClick={() => editButton(id, text)}>
          Edit
        </button>
        <button className="note-save" onClick={() => deleteButton(id)}>
          Delete
        </button>
      </div>
    </div>
  );
};

export default Notes;
