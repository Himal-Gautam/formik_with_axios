import "./App.css";
import React from "react";
import Home from "./components/Home";
import About from "./components/About";
import AddUser from "./components/AddUser";
import User from "./components/User";
import Contact from "./components/Contact";
import EditUser from "./components/EditUser";
import Navbar from "./components/Navbar";
import NotFound from "./components/NotFound";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

export default function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home/>} />
          <Route exact path="/about" element={<About/>} />
          <Route exact path="/adduser" element={<AddUser/>} />
          <Route exact path="/edituser/:id" element={<EditUser/>} />
          <Route exact path="/user/:id" element={<User/>} />
          <Route exact path="/contact" element={<Contact/>} />
          <Route element={<NotFound/>} />
        </Routes>
      </div>
    </Router>
  );
}
