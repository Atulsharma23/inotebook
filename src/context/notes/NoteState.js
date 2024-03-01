import React, { useState } from "react";
import NoteContext from "./noteContext";

const NoteState = (props) => {
  const notesInitial = [
    {
      id: 1,
      title: "My Title",
      notes: "Lorem ipsum dolor sit amet.",
      email: "user1@example.com",
      time: "2024-01-14T12:30:00Z",
    },
    {
      id: 2,
      title: "My Title",

      notes: "Consectetur adipiscing elit.",
      email: "user2@example.com",
      time: "2024-01-14T13:45:00Z",
    },
    {
      id: 3,
      title: "My Title",

      notes: "Sed do eiusmod tempor incididunt.",
      email: "user3@example.com",
      time: "2024-01-14T14:20:00Z",
    },
    {
      id: 4,
      title: "My Title",

      notes: "Ut labore et dolore magna aliqua.",
      email: "user4@example.com",
      time: "2024-01-14T15:10:00Z",
    },
    {
      id: 5,
      title: "My Title",

      notes: "Ut enim ad minim veniam.",
      email: "user5@example.com",
      time: "2024-01-14T16:00:00Z",
    },
  ];
  const [notes, setnotes] = useState(notesInitial);
  //Add a note
  const addnote = (title, notes, tag) => {
    console.log("Adding a note")
   const note = {
      id: 21,
      title: "My Title",
      description: "Lorem ipsum dolor sit amet.",
      email: "user1@example.com",
      time: "2024-01-14T12:30:00Z",
    };
    setnotes(notes.push(note));
  };

  //Delete a note
  const deletenote = () => {};

  //Edit a note
  const editnote = () => {};

  return (
    <NoteContext.Provider value={{ notes, addnote, deletenote, editnote }}>
      {props.children}
    </NoteContext.Provider>
  );
};
export default NoteState;
