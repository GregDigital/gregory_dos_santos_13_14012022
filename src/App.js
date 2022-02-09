import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Banner from "./components/Banner";
import Home from "./pages/Home";
import Signin from "./pages/Signin";
import Footer from "./components/Footer";
import Error from "./components/Error";

function App() {
  return (
    <Router>
      <Banner />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/signin" element={<Signin />} />
        <Route path="*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
