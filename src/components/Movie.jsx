import { useMovieContext } from "../context/movie_context";

const Movie = ({ movie }) => {
  const { setSelectedId } = useMovieContext();

  const handleSelectMovie = () => {
    setSelectedId(selectedId =>
      movie.imdbID === selectedId ? null : movie.imdbID
    );
  };

  return (
    <li onClick={handleSelectMovie}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
};

export default Movie;
