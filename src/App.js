import React from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Categories from "./components/pages/Categories";
import Provider from "./components/Context/Provider";

const App = () => {
  return (
    <Router>
      <Provider>
        <>
          <Navbar />
          <Categories />
          <Routes>
            <Route path="/" exact element={<Home />} />
          </Routes>
        </>
      </Provider>
    </Router>
  );
};

export default App;
