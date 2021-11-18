import React from "react";

export const Categories = ({ filterItems }) => {
  return (
    <div className="btn-links">
      <button
        className="btn-link"
        onClick={() => {
          filterItems("School");
        }}
      >
        School
      </button>
      <button
        className="btn-link"
        onClick={() => {
          filterItems("Personal");
        }}
      >
        Personal
      </button>
      <button
        className="btn-link"
        onClick={() => {
          filterItems("Diary");
        }}
      >
        Diary
      </button>
      <button
        className="btn-link"
        onClick={() => {
          filterItems("Random");
        }}
      >
        Random
      </button>
    </div>
  );
};
