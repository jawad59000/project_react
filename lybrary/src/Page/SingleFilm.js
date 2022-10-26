import { useParams, Link } from "react-router-dom";
import Navigation from "../Component/Navigation";
import useFetch from "../utils/useFetch";
let url1 =
  "https://upload.wikimedia.org/wikipedia/commons/f/fc/No_picture_available.png";
const SingleMovie = () => {
  const { id } = useParams();

  const { data: movie, isLoading, error } = useFetch(`i=${id}`);

  console.log(movie);
  if (isLoading) {
    return <h1>Loading</h1>;
  }
  if (error.show) {
    return (
      <div className="page-error">
        <h1>{error.msg}</h1>
        <Link to="/" className="btn">
          back to movies
        </Link>
      </div>
    );
  }
  console.log(movie);
  const { Title: title, Year: year, Plot: plot } = movie;
  let { Poster: poster } = movie;

  return (
    <main>
      {
        <section className="single-movie">
          <Navigation />
          <img src={poster === "N/A" ? (poster = url1) : poster} alt={title} />
          <div className="single-movie-info">
            <h2>{title}</h2>
            <p>{plot}</p>
            <h4>{year}</h4>
          </div>
        </section>
      }
    </main>
  );
};

export default SingleMovie;
