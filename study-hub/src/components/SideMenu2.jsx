import React from "react";
import { Link } from "react-router-dom";


function SideMenu2(){
    return(
        <div className="sideMenuDiv">
            <button className="button">Upload Material</button>
            <h2 className="sideMenuTitle">EXPLORE</h2>
            <p>Instructors</p>
            <p>Courses</p>
            <p>Subjects</p>
            <hr />
            <h2 className="sideMenuTitle">MY ACCOUNT</h2>
            <Link to="/profile" className="link"><p>Profile</p></Link>
            <p>Settings</p>
            <p>Log out</p>
        </div>
    );
}

export default SideMenu2;