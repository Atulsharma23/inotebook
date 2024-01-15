import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import "./App.css";
import Home from "./components/Home";
import About from "./components/About";
import Navbar from "./components/Navbar";
import NoteState from "./context/notes/NoteState";
function App() {
  return (
    <div className="App">
      <NoteState>
        <Router>
          <Navbar />
          <div className="container">
          <Routes>
            <Route path="/Home" element={<Home />} />

            <Route path="/About" element={<About />} />
          </Routes>
          </div>
        </Router>
      </NoteState>

    </div>
  );
}

export default App;
