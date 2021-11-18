import React, { useEffect, useState } from "react";
import { Categories } from "./Categories";
import ReactReadMoreReadLess from "react-read-more-read-less";

export const Form = () => {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [allNotes, setAllNotes] = useState([]);
  const [readMore, setreadMore] = useState(false);
  const [category, setCategory] = useState("");

  const filterItems = (category) => {
    if (category === "all") {
      setAllNotes(allNotes);
    }
    const newItems = allNotes.filter(
      (allNote) => allNote.category === category
    );
    setAllNotes(newItems);
  };

  const handleRemove = (id) => {
    let newList = allNotes.filter((allNote) => allNote.id !== id);
    setAllNotes(newList);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title && text) {
      const note = {
        id: new Date().getTime().toString(),
        title,
        text,
        category,
      };
      setAllNotes((allNotes) => {
        return [...allNotes, note];
      });
    } else {
      alert("invalid input");
    }
    setText("");
    setTitle("");
  };

  useEffect(() => {
    const allCategories = [
      "all",
      ...new Set(allNotes.map((allNote) => allNote.category)),
    ];
    console.log(allCategories);
  }, [allNotes]);

  return (
    <div className="full-form">
      <div className="test">
        <h1 style={{ margin: "20px 0", letterSpacing: "10px" }}>NOTES</h1>
        <p>Categories</p>
        <Categories filterItems={filterItems} />
        <form id="form">
          <div id="div-title">
            {/* <label htmlFor="title">Title : </label> */}
            <input
              placeholder="Title..."
              type="text"
              name="title"
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
          <div id="div-text">
            {/* <label htmlFor="text">Note : </label> */}
            <textarea
              placeholder="Enter Note Here..."
              rows="4"
              cols="40"
              type="text"
              name="text"
              id="text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </div>
          <select
            type="text"
            name="category"
            id="category"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Personal">Personal</option>
            <option value="School">School</option>
            <option value="Diary">Diary</option>
            <option value="Random">Random</option>
          </select>
          <button className="btn" onClick={handleSubmit}>
            add note
          </button>
        </form>
        <div className="my-notes">
          <p>My Notes</p>

          {allNotes.map((allNote) => {
            const { id, title, text, category } = allNote;
            return (
              <div key={id} className="notes">
                <div className="note-head">
                  <h1>{title}</h1>
                  <button
                    className="btn-link remove"
                    onClick={() => handleRemove(id)}
                  >
                    Remove Note
                  </button>
                </div>
                <p>{category}</p>
                <ReactReadMoreReadLess
                  charLimit={50}
                  readMoreText={"Read more ▼"}
                  readLessText={"Show less ▲"}
                  readMoreClassName="class"
                  readLessClassName="class"
                >
                  {text}
                </ReactReadMoreReadLess>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
