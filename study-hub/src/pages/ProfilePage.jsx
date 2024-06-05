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
                        <p className="profileName">Jane Doe</p>
                        <p className="profileEmail">jane.doe@gmail.com</p>
                        <hr />
                        <p className="profileBio">Bio</p>
                        <div className="profileBioText sectionDiv">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto nemo incidunt at saepe autem quos minima eaque ducimus possimus similique facilis laudantium officiis dolores, cupiditate, distinctio deserunt nihil! Autem.
                        </div>
                    </div>
                    <div className="profileSides2 sectionDiv">
                        <p>My Badges</p>
                        <br />
                        
                        <div className="badgesContainer">
                           <img src={newcomerBadge} alt="Badge Image" className="profileBadgeImg" />
                            <img src={newcomerBadge} alt="Badge Image" className="profileBadgeImg" />
                            <img src={newcomerBadge} alt="Badge Image" className="profileBadgeImg" />
                            <img src={newcomerBadge} alt="Badge Image" className="profileBadgeImg" />
                            <img src={newcomerBadge} alt="Badge Image" className="profileBadgeImg" />
                            
                        </div>
                        <div className="overlayProfile">
                            <Link to="/badgesPage" className="noLink seeMoreLink"> <p>See More</p></Link>
                        </div>
                        
                    </div>

                </div>
                
            </div>

        </div>
    );
}

export default ProfilePage;