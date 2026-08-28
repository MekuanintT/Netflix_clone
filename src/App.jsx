import { Routes, Route } from "react-router-dom";

// Layout pieces will be added as they're built (Header in T-07, Footer in T-09)
// import Header from "./components/Header/Header";
import Banner from "./assets/Components/Banner/Banner";
import Header from "./components/Header/header";

import Footer from "./components/Footer/Footer.jsx";

import DisplayRow from "./components/DisplayRow/DisplayRow.jsx";
// import Home from "./components/Home/Home";

// import Home from "./components/Home/Home";

function App() {
  return (
    <>
      <Header />
      <Banner />
      <DisplayRow />
      <Footer />
    </>
  );
}

export default App;