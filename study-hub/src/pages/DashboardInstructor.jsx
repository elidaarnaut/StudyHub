import React from "react";
import TopMenu2 from "../components/TopMenu2";
import SideMenu2 from "../components/SideMenu2";

function DashboardInstructor(){
    return(
        <div>
            <TopMenu2></TopMenu2>
            <div>
                <SideMenu2></SideMenu2>
            </div>
        </div>
    );
}

export default DashboardInstructor;