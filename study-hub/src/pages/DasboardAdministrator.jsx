import React from "react";
import TopMenu2 from "../components/TopMenu2";
import SideMenu2 from "../components/SideMenu2";

function DashboardAdministrator(){
    return(
        <div>
            <TopMenu2></TopMenu2>
            <SideMenu2></SideMenu2>
            <div className="next2SideMenuDiv">
                <div className="pendingInstSection">
                    <h1>Pending Instructor Approval</h1>
                    <div className="approvalBox">

                    </div>
                </div>
                <div className="pendingCourseSection">
                    <h1>Pending Course Approval</h1>
                    <div className="approvalBox">

                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardAdministrator;