import React, { useState } from "react";
import "./Navbar.css";
import { MenuItem } from "./MenuItem";
import { Link } from "react-router-dom";
function Navbar() {
  const [clicked,setClicked]=useState(false)
  function handleClick(){
    setClicked(!clicked);
  }
  return (
    <div>
      <nav className="NavbarItem">
        <h1 className="navbar-logo">Trippy</h1>
        <div className="menu-icons" onClick={handleClick}>
          <i className={clicked?"fas fa-times" : "fas fa-bars"}></i>
        
        </div>
        <ul className={clicked?"nav-menu active":"nav-menu"}>
          {MenuItem.map((item, index) => {
            return (
              <li key={index}>
                <Link className={item.cName} to={item.url}>
                  <i className={item.icon}></i>
                  {item.title}
                </Link>
              </li>
            );
          })}
          <button>Sign Up</button>
        </ul>
      </nav>
    </div>
  );
}

export default Navbar;
