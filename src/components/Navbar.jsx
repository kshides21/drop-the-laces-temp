import { useState } from "react";
import "../styles/navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="nav">
      <div className="logo">Drop the Laces</div>

      <div className={`links ${open ? "open" : ""}`}>
        <a href="#home">Home</a>
        <a href="#about">About</a>
        <a href="#partners">Partner Stores</a>
        <a href="#brands">Shop Brands</a>
        <a href="#download">Download App</a>
      </div>

      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>
    </nav>
  );
}
