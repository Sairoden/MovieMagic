// Library
import { useState } from "react";

// Context
// import { useMovieContext } from "../context/movie_context";

// Components
import MovieList from "./MovieList";

const ListBox = () => {
  const [isOpen1, setIsOpen1] = useState(true);

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen1(open => !open)}>
        {isOpen1 ? "–" : "+"}
      </button>
      {isOpen1 && <MovieList />}
    </div>
  );
};

export default ListBox;
