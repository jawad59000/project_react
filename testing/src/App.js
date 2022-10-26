import React from "react";
import people from "./data";
import { useState, useEffect } from "react";

const App = () => {
  const [peoples, setpeoples] = useState(people);
  const [index, setIndex] = useState(0);
  const prevPerson = () => {
    if (index > 0) {
      setIndex(index - 1);
    } else {
      setIndex(peoples.length - 1);
    }
  };
  const nextPerson = () => {
    if (index < peoples.length - 1) {
      setIndex(index + 1);
    } else {
      setIndex(0);
    }
  };
  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((index) => {
        // on utilise la fonction setIndex pour incrémenter l'index
        let newIndex = index + 1; // on incrémente l'index
        if (newIndex > people.length - 1) {
          // si l'index est supérieur à la longueur du tableau alors on retourne à la première personne
          //
          newIndex = 0; /// si l'index est supérieur à la longueur du tableau alors on retourne à la première personne
        }
        return newIndex;
      });
    }, 5000);
    return () => clearInterval(slider);
  });

  return (
    <section className="section">
      <div className="title">
        <h2>
          <span></span>
          Reviews
        </h2>
      </div>
      <div className="section-center">
        {peoples.map((person, slideIndex) => {
          const { id, image, name, title, quote } = person;
          let position = "nextSlide";
          if (index === slideIndex) {
            position = "activeSlide";
          }
          if (
            index - 1 === slideIndex ||
            (slideIndex === peoples.length - 1 && index === 0)
          ) {
            position = "lastSlide";
          }

          return (
            <article key={id} className={position}>
              <img src={image} alt={name} className="person-img" />
              <h4>{name}</h4>
              <p className="title">{title}</p>
              <p className="text">{quote}</p>
            </article>
          );
        })}
        <button className="prev" onClick={() => prevPerson()}>
          prev
        </button>
        <button className="next" onClick={() => nextPerson()}>
          next
        </button>
      </div>
    </section>
  );
};

export default App;
