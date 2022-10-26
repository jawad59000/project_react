import React from "react";
import { useState } from "react";
const Tour = ({ id, image, name, price, info, deleteItem }) => {
  const [i, setI] = useState(true);
  return (
    <>
      <article className="single-tour" key={id}>
        <img src={image} alt={name} />
        <footer>
          <div className="tour-info">
            <h4>{name}</h4>
            <h4 className="tour-price">{price}</h4>
          </div>
          <p>
            {i ? info.substring(0, 200) + "..." : info}
            <button onClick={() => setI(!i)}>
              {i ? "lire plus" : "lire moins"}
            </button>
          </p>
          <button
            className="delete-btn"
            onClick={() => {
              deleteItem(id);
            }}
          >
            Delete Article
          </button>
        </footer>
      </article>
    </>
  );
};

export default Tour;
