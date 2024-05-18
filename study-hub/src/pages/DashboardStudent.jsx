import React from "react";
import TopMenu2 from "../components/TopMenu2";
import SideMenu from "../components/SideMenu";

function DashboardStudent(){
    return(
        <div >
            <TopMenu2></TopMenu2>
            <div className="sDashboardMain">
                <SideMenu></SideMenu>
            </div>
        </div>
    );
}

export default DashboardStudent;