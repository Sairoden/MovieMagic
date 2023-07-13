// Library
import { useState } from "react";
import "./App.css";

import { useMovieContext } from "./context/movie_context";

function App() {
  // Movie Context
  const { movies, watched } = useMovieContext();

  // State
  const [query, setQuery] = useState("");
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const avgImdbRating = average(watched.map(movie => movie.imdbRating));
  const avgUserRating = average(watched.map(movie => movie.userRating));
  const avgRuntime = average(watched.map(movie => movie.runtime));

  return (
    <>
      <div className="nav-bar">
        <div className="logo">
          <span role="img">📺</span>
          <h1>MovieMax</h1>
        </div>
      </div>
    </>
  );
}

export default App;

// 4
