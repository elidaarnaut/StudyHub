//  SIDEBAR FOR ADMIN

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
        
        {/* <button className="button">Upload Material</button> */}
        <h2 className="sideMenuTitle">EXPLORE</h2>
        <Link to="/dashboardAdministrator" className='noLink'><p>Home</p></Link>
        <Link to="/adminInstructorsPage"  className='noLink'><p>Instructors</p></Link>
        <Link to="/adminCoursesPage" className='noLink'><p>Courses</p></Link>
        <Link to="/adminSubjectsPage" className="link"><p>Subjects</p></Link>
        <hr className='sidebarHr'/>
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
