import { Component } from 'react';
import './App.css';
import { Routes, Route, BrowserRouter } from "react-router-dom";
import Navbar from './Components/Navbar/Navbar.jsx';
import Home from './Components/Home/home';
import { Category } from './Components/Categories/Category';
import Foot from "./Components/Home/Footer/foot";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/category/:type" element={<Category />} />
      </Routes>
      <Foot />
    </div>
  );
}

export default App;