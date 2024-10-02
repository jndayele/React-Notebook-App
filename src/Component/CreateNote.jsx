/* eslint-disable react/prop-types */
// eslint-disable-next-line no-unused-vars
import React from "react";
import "./Note.css";

const CreateNote = ({ data, setData, saveButton }) => {
  const char = 150;
  const charList = char - data.length;
  return (
    <div className="note">
      <textarea
        cols={10}
        rows={5}
        placeholder="Write a Note...."
        value={data}
        onChange={(e) => setData(e.target.value)}
        maxLength={150}
      ></textarea>
      <div className="note-footer">
        <span className="label">{charList} Left</span>
        <button className="note-save" onClick={saveButton}>
          Save
        </button>
      </div>
    </div>
  );
};

export default CreateNote;
