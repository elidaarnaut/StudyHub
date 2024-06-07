import React from "react";
import TopMenu4 from "../components/TopMenu4";
import CourseCard from "../components/CourseCard";

function MyCoursesInstructorPage(){
    return(
        <div>
            <TopMenu4></TopMenu4>
            <div className="sDashboardMain">
                <div className="next2SideMenuDiv">
                    <div className="coursesSection">
                        <h1 className="instructorsTitle">Courses Page</h1>
                        <hr className="hrDash" />
                        <div className="coursesCardLayout">
                            <CourseCard></CourseCard>
                            <CourseCard></CourseCard>
                            <CourseCard></CourseCard>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default MyCoursesInstructorPage;