import React from "react";
import TopMenu3 from "../components/TopMenu3";
import person1 from "../assets/person1.jpg"; // Assuming you have Michael's image in your assets

function ApprovalCoursePage(){
    return(
        <div>
            <TopMenu3></TopMenu3>
            <div className="sDashboardMain">
                <div className="next2SideMenuDiv">
                    <p className="courseTitleSC">Introduction to Physics</p>
                    <hr className="hrSC" />
                    <div className="SCDescriptionDiv">
                        <p className="SCDescription">Course Description:</p>
                        <p>
                            This course offers a foundational understanding of physics, covering key concepts such as mechanics, thermodynamics, and electromagnetism, designed for beginners.
                        </p>
                    </div>
                    
                    <hr className="hrSC" />
                    <div className="SCInstructorDescription">
                        <div className="SCsection1">
                            <div className="SCinstructorPicDiv">
                                <img src={person1} alt="Michael Sun" />
                            </div>
                        </div>
                        <div className="SCsection2">
                            <p className="SCDescription">Instructor name: Michael Sun</p>
                            <p className="SCDescription">Instructor email:</p>
                            <p>michael.sun@tutorconnect.com</p>
                            <p className="SCDescription">Instructor Description:</p>
                            <p>Dr. Michael Sun is a renowned physicist and professor with over 20 years of teaching experience. His dynamic teaching methods and deep passion for physics have inspired hundreds of students.</p>
                        </div>
                    </div>
                    <div className="SCcoursePrice">
                        <p>Course Price: $50</p> {/* Adjust the price if needed */}
                    </div>

                    <div className="decisionDiv">
                    <div className="accept">
                        <p>Accept</p>
                    </div>
                    <div className="decline">
                        <p>Decline</p>
                    </div>

                </div>

                </div>

                
            </div>
        </div>
    );
}

export default ApprovalCoursePage;
