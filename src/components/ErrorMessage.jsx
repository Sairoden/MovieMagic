import { useMovieContext } from "../context/movie_context";

const ErrorMessage = () => {
  const { error } = useMovieContext();

  return (
    <p className="error">
      <span>⛔</span> {error}
    </p>
  );
};

export default ErrorMessage;
