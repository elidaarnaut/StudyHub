import React from "react";
import TopMenu2 from "../components/TopMenu2";
import "../App.css";
import instructorPic from "../assets/person5.jpg";  // Assuming the correct import path

function SingularCoursePage(){
    return(
        <div>
            <TopMenu2></TopMenu2>
            <div className="sDashboardMain">
                <div className="next2SideMenuDiv">
                    <p className="courseTitleSC">Advanced Calculus for High School</p>
                    <hr className="hrSC" />
                    <div className="SCDescriptionDiv">
                        <p className="SCDescription">Course Description:</p>
                        <p>
                            An in-depth exploration of calculus designed to prepare high school students for collegiate level mathematics.
                        </p>
                    </div>
                    
                    <hr className="hrSC" />
                    <div className="SCInstructorDescription">
                        <div className="SCsection1">
                            <div className="SCinstructorPicDiv">
                                <img src={instructorPic} alt="Emily Cartwright" />
                            </div>
                        </div>
                        <div className="SCsection2">
                            <p className="SCDescription">Instructor name: Emily Cartwright</p>
                            <p className="SCDescription">Instructor email:</p>
                            <p>emily.cartwright@edututors.com</p>
                            <p className="SCDescription">Instructor Description:</p>
                            <p>Emily Cartwright has extensive experience teaching and developing curriculum for advanced mathematics courses. Her approach to calculus integrates real-world applications to enhance student understanding and engagement.</p>
                        </div>
                    </div>
                    <div className="SCcoursePrice">
                        <p>Course Price: $40</p>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default SingularCoursePage;
