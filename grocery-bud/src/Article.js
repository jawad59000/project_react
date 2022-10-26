import React from "react";

const Article = ({ fruit, handleDelete, handleEdit }) => {
  const { name, id } = fruit;
  return (
    <div className="article">
      <p>{name}</p>
      <div className="btn-container">
        <button
          className="edit"
          onClick={() => {
            handleEdit(id);
          }}
        >
          edit
        </button>
        <button
          className="delete"
          onClick={() => {
            handleDelete(id);
            console.log(id);
          }}
        >
          delete
        </button>
      </div>
    </div>
  );
};

export default Article;
