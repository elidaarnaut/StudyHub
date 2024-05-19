import React from "react";
import TopMenu2 from "../components/TopMenu2";
import SideMenu from "../components/SideMenu";
import Badges from "../components/Badges";
import MySubjectsDash from "../components/MySubjectDash";

function DashboardStudent(){
    return(
        <div >
            <TopMenu2></TopMenu2>
            <div className="sDashboardMain">
                <SideMenu></SideMenu>
                <div className="next2SideMenuDiv">
                    <div className="badgesSectionDash">
                        <h1>My Badges</h1>
                        <hr />
                        <Badges></Badges>
                    </div>
                    <div className="mySubjectsDash">
                        <h1>My Subjects</h1>
                        <hr />
                        <div className="subjectsListedDash">
                            <MySubjectsDash></MySubjectsDash>
                            <MySubjectsDash></MySubjectsDash>
                            <MySubjectsDash></MySubjectsDash>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardStudent;