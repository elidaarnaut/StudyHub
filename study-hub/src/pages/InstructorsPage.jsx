import React from "react";
import TopMenu2 from "../components/TopMenu2";
import InstructorCard from "../components/InstructorCard";

function InstructorsPage(){
    return(
        <div>
            <TopMenu2></TopMenu2>

            <div className="sDashboardMain">
                <div className="next2SideMenuDiv">
                    <div className="instructorsSectionDash">
                        <h1 className="instructorsTitle">Instructors page</h1>
                        <hr className="dashHr" />
                        <div className="instructorCardLayout">
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

export default InstructorsPage;