import React, { useContext, useState } from "react";
import noteContext from "../context/notes/noteContext";
const Addnote = () => {
  const context = useContext(noteContext);
  const { addNote } = context;
  const [note, setNote] = useState({ title: "", description: "", tag: "" });
  const handleClick = (e) => {
    e.preventDefault();
    addNote(note);
  };
  const onChange = (e) => {
    setNote({ ...note, [e.target.name]: e.target.value });
  };
  return (
    <div>
      <div className="container my-3">
        <h1>Add a Note</h1>
        <div className="mb-3 ">
          <label htmlFor="title" className="form-label">
            Title{" "}
          </label>
          <input
            type="text"
            className="form-control"
            id="title"
            name="title"
            onChange={onChange}
            placeholder="Title "
          />
        </div>
        <div className="mb-3">
          <label htmlFor="note" className="form-label">
            Note{" "}
          </label>
          <textarea
            className="form-control"
            id="description"
            name="description"
            onChange={onChange}
            rows="3"
          ></textarea>
          <button className="btn-primary my-3" onClick={handleClick}>
            Submit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Addnote;
