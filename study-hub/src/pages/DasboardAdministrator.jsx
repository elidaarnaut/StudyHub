import React from "react";
import TopMenu3 from "../components/TopMenu3";
import SideMenu2 from "../components/SideMenu2";

function DashboardAdministrator(){
    return(
        <div className="sDashboardMain">
            <TopMenu3></TopMenu3>
            {/* <SideMenu2></SideMenu2> */}
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