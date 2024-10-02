/* eslint-disable react/jsx-key */
// eslint-disable-next-line no-unused-vars
import React, { useState, useEffect } from "react";
import CreateNote from "./CreateNote";
import Notes from "./Notes";
// uuid is for setting random id's for lists
import { v4 as uuid } from "uuid";
const Note = () => {
  //Setting of the useStates
  const [data, setData] = useState(""); //useState for inputting text
  const [notes, setNotes] = useState([]); //useState for saving and storing notes
  const [edit, setEdit] = useState(null); //useState for editting nots

  //Function for editting notes
  const editButton = (id, text) => {
    setEdit(id);
    setData(text);
  };

  //Function for saving notes
  const saveButton = () => {
    if (edit) {
      setNotes(
        notes.map((note) => (note.id === edit ? { ...note, text: data } : note))
      );
    } else {
      setNotes((prevNotes) => [
        ...prevNotes,
        {
          id: uuid(),
          text: data,
        },
      ]);
    }

    setData("");
    setEdit(null);
  };

  //Function for deleting notes
  const deleteButton = (id) => {
    const delNote = notes.filter((n) => n.id !== id);
    setNotes(delNote);
  };

  useEffect(() => {
    const datas = JSON.parse(localStorage.getItem("Notes"));
    if (datas) {
      setData(datas);
    }
  }, []);

  //useEffect function for storing note in our local storage
  useEffect(() => {
    window.localStorage.setItem("Notes", JSON.stringify(notes));
  }, [notes]);

  return (
    <div className="notes">
      {notes.map((note) =>
        edit === note.id ? (
          <CreateNote data={data} setData={setData} saveButton={saveButton} />
        ) : (
          <Notes
            key={note.id}
            id={note.id}
            text={note.text}
            editButton={editButton}
            deleteButton={deleteButton}
          ></Notes>
        )
      )}
      {edit === null ? (
        <CreateNote data={data} setData={setData} saveButton={saveButton} />
      ) : (
        <></>
      )}
    </div>
  );
};

export default Note;
