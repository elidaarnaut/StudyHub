import React from "react";
import TopMenu2 from "../components/TopMenu2";
import SideMenu3 from "../components/SideMenu3";

function DashboardInstructor(){
    return(
        <div>
            <TopMenu2></TopMenu2>
            <div>
                <SideMenu3></SideMenu3>
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