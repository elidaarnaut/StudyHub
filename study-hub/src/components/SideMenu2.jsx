import React from "react";

function SideMenu(){
    return(
        <div className="sideMenuDiv">
            <button className="button">Upload Material</button>
            <h2 className="sideMenuTitle">EXPLORE</h2>
            <p>Instructors</p>
            <p>Courses</p>
            <p>Subjects</p>
            <hr />
            <h2 className="sideMenuTitle">MY ACCOUNT</h2>
            <p>Profile</p>
            <p>Settings</p>
            <p>Log out</p>
        </div>
    );
}

export default SideMenu;