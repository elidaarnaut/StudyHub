import React from "react";

function SideMenu(){
    return(
        <div className="sideMenuDiv">
            <h2 className="sideMenuTitle">EXPLORE</h2>
            <p>Instructors</p>
            <p>Courses</p>
            <p>AI Chat</p>
            <p>Virtal Lab</p>
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