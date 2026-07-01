import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="nav-logo">
       <span>DROP</span> THE LACES
      </div>

      <nav className={`nav-links ${open ? "active" : ""}`}>
        <a href="#about">About</a>
        <a href="#partners">Partner Stores</a>
        <a href="#brands">Brands</a>
        <a href="#download">Download</a>
      </nav>

      <button
        className="download-btn"
      >
        Get the App
      </button>

      <div
        className="hamburger"
        onClick={() => setOpen(!open)}
      >
        ☰
      </div>

    </header>
  );
}

export default Navbar;
