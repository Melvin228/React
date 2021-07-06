import React from "react";
import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <h2>Welcome to the joke center!</h2>
      <input type="button" value="Logout" id="nav" />
    </nav>
  );
}

export default Navbar;
