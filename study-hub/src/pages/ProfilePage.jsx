import React from "react";
import { Link } from "react-router-dom";
import TopMenu2 from "../components/TopMenu2";
import banner from "../assets/banner.svg";
import profilePic from "../assets/profilePic.svg";
import newcomerBadge from "../assets/newcomerBadge.svg";

function ProfilePage(){
    return(
        <div>
            <TopMenu2></TopMenu2>
            <div className="next2SideMenuDivProfile">
                <img src={banner} alt="Banner" className="banner" />
                <div className="ProfilePicDiv">                
                    <img src={profilePic} alt="Profile Picture" className="profilePic"/>
                </div>
                <div className="profileContents">
                    <div className="profileSides1">
                        <p className="profileName">Emina Zolota</p>
                        <p className="profileEmail">EminaZolota@gmail.com</p>
                        <hr />
                        <p className="profileBio">Bio</p>
                        <div className="profileBioText sectionDiv">
                           
                        </div>
                    </div>
                    <div className="profileSides2 sectionDiv">
                        <p>My Badges</p>
                        <br />
                        
                        <div className="badgesContainer">
                           <img src={newcomerBadge} alt="Badge Image" className="profileBadgeImg" />
                            
                            <Link to="/badgesPage" className="noLink seeMoreLink"><button class="card-button1">See More</button></Link>
                        </div>
                        
                        
                    </div>

                </div>
                
            </div>

        </div>
    );
}

export default ProfilePage;