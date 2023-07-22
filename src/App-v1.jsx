// Components
// import Navbar from "./components/Navbar";
// import Main from "./components/Main";
import StarRating from "./components/StarRating";

function App() {
  // Movie Context

  return (
    <>
      {/* <Navbar />
      <Main /> */}
      <StarRating
        maxRating={5}
        messages={["Terrible", "Bad", "Okay", "Good", "Amazing"]}
        defaultRating={3}
      />
    </>
  );
}

export default App;

// 16
