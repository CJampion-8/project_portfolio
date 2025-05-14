import React from 'react';
import './navbar.css';

function NavBar() {
  return (
    <div className="navBar">
      <div className="nav-wrapper">
        <div className="nav-title">
          <a href="#home" className="nav-title-custom">CJ CYPERT</a>
        </div>
        <div className="nav-links">
          <a href="#home" className="nav-link-custom">TO-DO LIST</a>
          <a href="#features" className="nav-link-custom">BMI CALCULATOR</a>
          <a href="#pricing" className="nav-link-custom">WEATHER DASHBOARD</a>
          <a href="#pricing" className="nav-link-custom">DISCORD BOT</a>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
