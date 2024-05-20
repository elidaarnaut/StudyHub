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
            <p>Settings</p>
            <p>Log out</p>
        </div>
    );
}

export default SideMenu3;