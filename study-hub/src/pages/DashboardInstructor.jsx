import React from "react";
import TopMenu4 from "../components/TopMenu4";
import SideMenu3 from "../components/SideMenu3";

function DashboardInstructor(){
    return(
        <div>
            <TopMenu4></TopMenu4>
            <div className="sDashboardMain">
                {/* <SideMenu3></SideMenu3> */}
                <div className="next2SideMenuDiv">
                    <div className="notificationsSectionDash">
                        <h1>Notifications</h1>
                        {/* <hr /> */}
                        <div className="notificationsBoard">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DashboardInstructor;