import React from "react";
import TopMenu3 from "../components/TopMenu3";
import CourseCard from "../components/CourseCard";

function AdminCoursesPage(){
    return(
        <div>
            <TopMenu3></TopMenu3>
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

export default AdminCoursesPage;