// Library
import { useState } from "react";

// Context
import { useMovieContext } from "../context/movie_context";

// Components
import WatchedSummary from "./WatchedSummary";
import WatchedMovieList from "./WatchedMovieList";

const WatchedBox = () => {
  // State
  const [isOpen2, setIsOpen2] = useState(true);

  // Context
  const { watched } = useMovieContext();

  return (
    <div className="box">
      <button className="btn-toggle" onClick={() => setIsOpen2(open => !open)}>
        {isOpen2 ? "–" : "+"}
      </button>
      {isOpen2 && (
        <>
          <WatchedSummary watched={watched} />
          <WatchedMovieList watched={watched} />
        </>
      )}
    </div>
  );
};

export default WatchedBox;
