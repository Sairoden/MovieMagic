// Context
import { useMovieContext } from "../context/movie_context";

const MovieDetail = () => {
  const { setSelectedId, selectedId } = useMovieContext();

  const handleCloseMovie = () => {
    setSelectedId(null);
  };

  return (
    <div className="details">
      <button className="btn-back " onClick={handleCloseMovie}>
        &larr;
      </button>
      {selectedId}
    </div>
  );
};

export default MovieDetail;
