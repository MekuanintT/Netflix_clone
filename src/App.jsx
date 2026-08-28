import { Routes, Route } from "react-router-dom";
import Banner from "./assets/Components/Banner/Banner";
import Header from "./components/Header/header";
// import Footer from "./components/Footer/Footer";
// import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Banner />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: "120px 40px" }}>
              <h1>Netflix Clone</h1>
              <p>
                Scaffolding complete — Home route ready for Banner + DisplayRow.
              </p>
            </div>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;