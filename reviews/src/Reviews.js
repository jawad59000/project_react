import React from "react";
import reviews from "./data";
import { useState } from "react";

const Reviews = () => {
  //   const [data, setData] = useState(reviews);
  const [index, setIndex] = useState(0);

  const { image, name, id, job, text } = reviews[index];

  return (
    <article className="review">
      <div className="img-container">
        <img className="person-img" src={image} alt={name} />
        <span className="quot-icon"></span>
      </div>
      <h4 className="author">{name}</h4>
      <p className="job">{job}</p>
      <p className="info">{text}</p>
      <div className="button-container">
        <button
          className="prev-btn"
          onClick={() => {
            index > 0 ? setIndex(index - 1) : setIndex(reviews.length - 1);
          }}
        >
          prev
        </button>
        <button
          className="random-btn"
          onClick={() => {
            const random = Math.floor(Math.random() * reviews.length);
            setIndex(random);
          }}
        >
          random
        </button>
        <button
          className="next-btn"
          onClick={() => {
            index < reviews.length - 1 ? setIndex(index + 1) : setIndex(0);
          }}
        >
          next
        </button>
      </div>
    </article>
  );
};

export default Reviews;
