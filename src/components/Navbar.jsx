// Components
import Search from "./Search";
import Logo from "./Logo";
import NumResults from "./NumResults";

// Context
import { useMovieContext } from "../context/movie_context";

const Navbar = () => {
  const { movies } = useMovieContext();

  return (
    <nav className="nav-bar">
      <Logo />
      <Search />
      <NumResults movies={movies} />
    </nav>
  );  
};

export default Navbar;
