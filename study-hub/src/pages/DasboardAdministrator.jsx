import React from "react";
import TopMenu3 from "../components/TopMenu3";
import AdminInstructorRequest from "../components/AdminInstructorRequest";
import AdministratorCourseApproval from "../components/AdministratorCourseApproval";

// Sample Data
const pendingInstructors = [
    { name: "John Doe" },
    { name: "Jane Smith" }
];

const pendingCourses = [
    { name: "Advanced Mathematics" },
    { name: "Introduction to Physics" }
];

function DashboardAdministrator(){
    return(
        <div className="sDashboardMain">
            <TopMenu3></TopMenu3>
            <div className="next2SideMenuDiv">
                <div className="pendingInstSection">
                    <h1>Pending Instructor Approval</h1>
                    <div className="approvalBox">
                        {pendingInstructors.map((instructor, index) => (
                            <AdminInstructorRequest key={index} instructorName={instructor.name} />
                        ))}
                    </div>
                </div>
                <div className="pendingCourseSection">
                    <h1>Pending Course Approval</h1>
                    <div className="approvalBox">
                        {pendingCourses.map((course, index) => (
                            <AdministratorCourseApproval key={index} courseName={course.name} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardAdministrator;
