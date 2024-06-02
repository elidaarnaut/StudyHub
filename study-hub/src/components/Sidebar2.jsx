import React, { useState } from 'react';
import menuPic from "../assets/menu.svg";
import { Link } from "react-router-dom";

import '../App.css';

function Sidebar2({ toggleNav }) {  // Receive toggleNav as a prop
  const [isOpen, setIsOpen] = useState(false);

  const handleToggleNav = () => {
    setIsOpen(!isOpen);
    toggleNav && toggleNav();  // Use toggleNav if provided from parent component
  };

  return (
    <div>
      <div id="mySidebar" className="sidebar" style={{ width: isOpen ? '250px' : '0' }}>
        <a href="javascript:void(0)" className="closebtn" onClick={handleToggleNav}>×</a>
        
        <button className="button">Upload Material</button>
        <h2 className="sideMenuTitle">EXPLORE</h2>
        <Link><p>Instructors</p></Link>
        <Link><p>Courses</p></Link>
        <Link to="/subjects" className="link"><p>Subjects</p></Link>
        <hr />
        <h2 className="sideMenuTitle">MY ACCOUNT</h2>
        <Link to="/profile" className="link"><p>Profile</p></Link>
        <Link to="/settings1" className="link"><p>Settings</p></Link>
        <Link><p>Log out</p></Link>

      </div>

      {/* <div id="main" style={{ marginLeft: isOpen ? '250px' : '0' }}> */}
        <button className="openbtn" onClick={handleToggleNav}><img src={menuPic} alt="" className="menuPic" /></button>  
        {/* <h2>Collapsed Sidebar</h2>
        <p>Click on the hamburger menu/bar icon to toggle the sidebar.</p> */}
      {/* </div> */}
    </div>
  );
}

export default Sidebar2;
