// SINGULAR COURSE PAGE FOR INSTRUCTOR

import React from "react";
import TopMenu4 from "../components/TopMenu4";
import "../App.css";
import instructorPic from "../assets/InstructorImg.jpg";

function SingularCoursePageInstructor(){
    return(
        <div>
            <TopMenu4></TopMenu4>
            <div className="sDashboardMain">
                <div className="next2SideMenuDiv">
                    <p className="courseTitleSC">Course Name</p>
                    <hr className="hrSC" />
                    <div className="SCDescriptionDiv" >
                        
                        <p className="SCDescription">Course Description:</p>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Adipisci tenetur quis error alias numquam quidem sit porro earum. Velit culpa tempora nobis. Facere ipsa sed, nemo obcaecati magni ea atque.
                        </p>
                    </div>
                    
                    <hr className="hrSC" />
                    <div className="SCInstructorDescription">
                        <div className="SCsection1">
                            <div className="SCinstructorPicDiv">
                                <img src={instructorPic} alt="" />
                            </div>
                            
                        </div>
                        <div className="SCsection2">
                            <p className="SCDescription" >Instructor name</p>
                            <p className="SCDescription">Instructor email:</p>
                            <p>john.doe@gmail.com</p>
                            <p className="SCDescription">Instructor Description:</p>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit, incidunt vero! Porro suscipit repellat eum odit vel, deserunt illo ut quae in natus qui nulla rerum reiciendis architecto molestiae repudiandae!</p>
                        </div>
                        
                    </div>
                    <div className="SCcoursePrice">
                        <p>Course Price: $$$</p>
                    </div>

                </div>

            </div>

        </div>
    );
}

export default SingularCoursePageInstructor;