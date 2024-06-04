import React from "react";
import TopMenu2 from "../components/TopMenu2";
import CourseCard from "../components/CourseCard";

function CoursesPage(){
    return(
        <div>
            <TopMenu2></TopMenu2>
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

export default CoursesPage;