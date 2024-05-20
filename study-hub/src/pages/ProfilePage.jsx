import React from "react";
import TopMenu2 from "../components/TopMenu2";
import SideMenu from "../components/SideMenu";
import banner from "../assets/banner.svg";
import profilePic from "../assets/profilePic.svg";

function ProfilePage(){
    return(
        <div>
            <TopMenu2></TopMenu2>
            <SideMenu></SideMenu>
            <div className="next2SideMenuDiv">
                <img src={banner} alt="Banner" className="banner" />
                <img src={profilePic} alt="Profile Picture" />
            </div>

        </div>
    );
}

export default ProfilePage;