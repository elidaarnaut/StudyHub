import React from "react";
import { Link } from "react-router-dom";


function SideMenu(){
    return(
        <div className="sideMenuDiv">
            <h2 className="sideMenuTitle">EXPLORE</h2>
            <p>Instructors</p>
            <p>Courses</p>
            <p>AI Chat</p>
            <p>Virtal Lab</p>
            <Link to="/subjects" className="link"><p>Subjects</p></Link>
            <hr />
            <h2 className="sideMenuTitle">MY ACCOUNT</h2>
            <Link to="/profile" className="link"><p>Profile</p></Link>
            <Link to="/settings1" className="link"><p>Settings</p></Link>
            <p>Log out</p>
        </div>
    );
}

export default SideMenu;