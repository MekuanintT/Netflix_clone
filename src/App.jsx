import { Routes, Route } from "react-router-dom";
// Layout pieces will be added as they're built (Header in T-07, Footer in T-09)
import Header from "./components/Header/header";
// import Footer from "./components/Footer/Footer";
// import Home from "./components/Home/Home";

function App() {
  return (
    <div className="app">
      <Header />
      <Routes>
        <Route
          path="/"
          element={
            <div style={{ padding: "120px 40px" }}>
              <h1>Netflix Clone</h1>
              <p>Scaffolding complete — Home route ready for Banner + DisplayRow.</p>
            </div>
          }
        />
      </Routes>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
