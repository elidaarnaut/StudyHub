import React from "react";
import TopMenu4 from "../components/TopMenu4";

function DashboardInstructor(){
    return(
        <div>
            <TopMenu4></TopMenu4>
            <div className="sDashboardMain">
                <div className="next2SideMenuDiv">
                    <div className="notificationsSectionDash">
                        <h1>Notifications</h1>
                        <hr className="dashHr"/>
                        <div className="notificationsBoard">

                        </div>
                    </div>

                </div>
            </div>
        </div>
    );
}

export default DashboardInstructor;