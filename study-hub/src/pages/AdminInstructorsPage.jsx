import React from "react";
import TopMenu3 from "../components/TopMenu3";
import InstructorCard from "../components/InstructorCard";

function AdminInstructorPage(){
    return(
        <div>
            <TopMenu3></TopMenu3>

            <div className="sDashboardMain">
                <div className="next2SideMenuDiv">
                    <div className="instructorsSectionDash">
                        <h1 className="instructorsTitle">Instructors page</h1>
                        <hr className="dashHr" />
                        <div className="instructorCardLayout">
                            <InstructorCard></InstructorCard>
                            <InstructorCard></InstructorCard>
                            <InstructorCard></InstructorCard>
                            <InstructorCard></InstructorCard>
                            <InstructorCard></InstructorCard>
                            <InstructorCard></InstructorCard>



                        </div>
                        
                    </div>
                    
                    

                </div>

            </div>
        </div>
    );
}

export default AdminInstructorPage;