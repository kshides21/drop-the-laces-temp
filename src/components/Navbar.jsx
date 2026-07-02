import { useState } from "react";
import "../styles/navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="navbar">

      <div className="nav-logo">
        <a href="#top">
       <span>DROP</span> THE LACES
        </a>
      </div>

      <nav className={`nav-links ${open ? "active" : ""}`}>
        <a onClick={() => setOpen(!open)} href="#about">About</a>
        <a onClick={() => setOpen(!open)} href="#brands">Brands</a>
        <a onClick={() => setOpen(!open)} href="#partners">Partner Stores</a>
        <a onClick={() => setOpen(!open)} href="#download">Download</a>
      </nav>

      <a href="#download">
      <button
        className="download-btn"
      >
        Get the App
      </button>
        </a>


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
