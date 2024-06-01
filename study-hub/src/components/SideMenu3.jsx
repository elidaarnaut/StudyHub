import React from "react";
import { Link } from "react-router-dom";


function SideMenu3(){
    return(
        <div className="sideMenuDiv">
            <button className="button">Create Course</button>
            <h2 className="sideMenuTitle">EXPLORE</h2>
            <p>My Courses</p>
            <hr />
            <h2 className="sideMenuTitle">MY ACCOUNT</h2>
            <Link to="/profile" className="link"><p>Profile</p></Link>
            <Link to="/settings1" className="link"><p>Settings</p></Link>
            <p>Log out</p>
        </div>
    );
}

export default SideMenu3;