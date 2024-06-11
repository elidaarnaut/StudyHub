import React from "react";
import { Link } from "react-router-dom";
import TopMenu2 from "../components/TopMenu2";
import banner from "../assets/banner.svg";
import profilePic from "../assets/profilePic.svg";
import CourseCard from "../components/CourseCard";
import newcomerBadge from "../assets/newcomerBadge.svg";

function InstructorProfileStudentDash(){
    return(
        <div>
            <TopMenu2></TopMenu2>
            <div className="next2SideMenuDivProfile">
                <img src={banner} alt="Banner" className="banner" />
                <div className="ProfilePicDiv">                
                    <img src={profilePic} alt="Profile Picture" className="profilePic"/>
                </div>
                <div className="profileContents">
                    <div className="profileSides">
                        <p className="profileName">Jane Doe</p>
                        <p className="profileEmail">jane.doe@gmail.com</p>
                        
                    </div>
                    <div className="profileSides3 sectionDiv">
                        <p className="profileBio">Bio</p>
                        <div className="profileBioText ">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere iusto nemo incidunt at saepe autem quos minima eaque ducimus possimus similique facilis laudantium officiis dolores, cupiditate, distinctio deserunt nihil! Autem.
                        </div>
                        
                        
                    </div>

                </div>
                <div className="coursesSection1">
                        <h1 className="instructorsTitle">My Courses</h1>
                        <hr className="hrDash" />
                        <div className="coursesCardLayout">
                            <CourseCard></CourseCard>
                            <CourseCard></CourseCard>
                            <CourseCard></CourseCard>
                        </div>

                    </div>
                
            </div>

        </div>
    );
}

export default InstructorProfileStudentDash;