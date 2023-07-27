// React
import { useEffect, useRef } from "react";

// Components
import StarRating from "./StarRating";
import Loader from "./Loader";

// Context
import { useMovieContext } from "../context/movie_context";
import { useKey } from "../useKey";

const MovieDetail = () => {
  const {
    selectedId,
    movie,
    selectIsLoading,
    setWatched,
    userRating,
    setUserRating,
    watched,
    setSelectedId,
  } = useMovieContext();

  const {
    Title: title,
    Year: year,
    Poster: poster,
    Runtime: runtime,
    imdbRating,
    Plot: plot,
    Released: released,
    Actors: actors,
    Director: director,
    Genre: genre,
  } = movie;

  const countRef = useRef(0);

  movie.userRating = userRating.toString();

  const isWatched = watched.map(movie => movie.imdbID).includes(selectedId);
  const watchedUserRating = watched.find(
    movie => movie.imdbID === selectedId
  )?.userRating;

  useKey("Escape", handleCloseMovie);

  const handleAddWatched = () => {
    const newMovie = {
      imdbID: selectedId,
      title,
      year,
      poster,
      imdbRating: +imdbRating,
      runtime: +runtime.split(" ").at(0),
      userRating,
      countRatingDecisions: countRef.current,
    };

    setWatched(movies => [...movies, newMovie]);
    handleCloseMovie();
    setUserRating(0);
  };

  function handleCloseMovie() {
    setSelectedId(null);
  }

  useEffect(() => {
    if (!title) return;

    document.title = `Movie | ${title}`;

    return () => (document.title = "MovieMax");
  }, [title]);

  useEffect(() => {
    if (userRating) countRef.current++;
  }, [userRating]);

  return (
    <div className="details">
      {selectIsLoading ? (
        <Loader />
      ) : (
        <>
          <header>
            <button className="btn-back" onClick={handleCloseMovie}>
              &larr;
            </button>
            <img src={poster} alt={`Poster of ${movie}`} />
            <div className="details-overview">
              <h2>{title}</h2>
              <p>
                {released} &bull; {runtime}
              </p>
              <p>{genre}</p>
              <p>
                <span>⭐</span> IMDb rating
              </p>
            </div>
          </header>

          <section>
            <div className="rating">
              {!isWatched ? (
                <>
                  <StarRating maxRating={10} size={24} />
                  {userRating > 0 && (
                    <button className="btn-add" onClick={handleAddWatched}>
                      Add to List
                    </button>
                  )}
                </>
              ) : (
                <p>You have rated this movie with {watchedUserRating} ⭐</p>
              )}
            </div>
            <p>
              <em>{plot}</em>
            </p>
            <p>Starring {actors}</p>
            <p>Directed by {director}</p>
          </section>
        </>
      )}
    </div>
  );
};

export default MovieDetail;
