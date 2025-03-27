import React, { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Professors from "./pages/Professors";
import Doubts from "./pages/Doubts";
import Appointment from "./pages/Appointment";
import ProtectedRoute from "./ProtectedRoute";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");
    setIsAuthenticated(!!token); 
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("token");
    setIsAuthenticated(false); 
    window.location.href = "/login"; 
  };

  return (
    <Router>
      {/* Navigation Bar */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
        <div className="container">
          <Link className="navbar-brand" to="/">Clarify Doubts</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              {isAuthenticated ? (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/professors">Professors</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/doubts">Doubts</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/appointment">Book Appointment</Link>
                  </li>
                  <li className="nav-item">
                    <button className="btn btn-danger" onClick={handleLogout}>Logout</button>
                  </li>
                </>
              ) : (
                <>
                  <li className="nav-item">
                    <Link className="nav-link" to="/login">Login</Link>
                  </li>
                  <li className="nav-item">
                    <Link className="nav-link" to="/register">Register</Link>
                  </li>
                </>
              )}
            </ul>
          </div>
        </div>
      </nav>

      <div className="container mt-4">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/login" element={<Login setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="/register" element={<Register />} />

          {/* Protect These Pages */}
          <Route element={<ProtectedRoute />}>
            <Route path="/professors" element={<Professors />} />
            <Route path="/doubts" element={<Doubts />} />
            <Route path="/appointment" element={<Appointment />} />
          </Route>

          {/* Redirect unknown routes */}
          <Route path="*" element={<Login />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
