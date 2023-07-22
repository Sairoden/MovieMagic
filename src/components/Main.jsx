// Components
import Box from "./Box";
import MovieList from "./MovieList";
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";
import Loader from "./Loader";
import ErrorMessage from "./ErrorMessage";

// Context
import { useMovieContext } from "../context/movie_context";

const Main = () => {
  const { isLoading, error } = useMovieContext();

  return (
    <main className="main">
      <Box>
        {isLoading && <Loader />}
        {!isLoading && !error && <MovieList />}
        {error && <ErrorMessage />}
      </Box>
      <Box>
        <WatchedSummary />
        <WatchedMovieList />
      </Box>
    </main>
  );
};

export default Main;
