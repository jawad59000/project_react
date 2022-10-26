import React from "react";
import { useContext } from "react";
import { UserContext } from "../utils/context";
import { Link } from "react-router-dom";

const url =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";

const Movies = () => {
  const { data } = useContext(UserContext);

  return (
    <div className="container">
      {data
        ? data.map((film, index) => {
            return (
              <Link to={`/film/${film.imdbID}`} key={index}>
                {film.Poster === "N/A" ? (
                  (film.Poster = url)
                ) : (
                  <>
                    <div className="image-infos">
                      <img src={film.Poster} alt="" />
                      <div className="infos">
                        <h5 key={index}>{film.Title}</h5>
                        <p>{film.Year}</p>
                      </div>
                    </div>
                  </>
                )}
              </Link>
            );
          })
        : "sorry no film correspond"}
    </div>
  );
};

export default Movies;
