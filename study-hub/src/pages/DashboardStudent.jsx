import React from "react";
import TopMenu2 from "../components/TopMenu2";
import Badges from "../components/Badges";
import MySubjectsDash from "../components/MySubjectDash";

function DashboardStudent(){
    return(
        <div >
            <TopMenu2></TopMenu2>
            <div className="sDashboardMain">
                <div className="next2SideMenuDiv">
                    <div className="badgesSectionDash">
                        <h1 className="instructorsTitle">My Badges</h1>
                        <hr className="dashHr"/>
                        <Badges></Badges>
                    </div>
                    <div className="mySubjectsDash">
                        <h1 className="instructorsTitle">My Subjects</h1>
                        <hr  className="dashHr"/>
                        <div className="subjectsListedDash">
                            {/* <MySubjectsDash></MySubjectsDash>
                            <MySubjectsDash></MySubjectsDash>
                            <MySubjectsDash></MySubjectsDash> */}
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    );
}

export default DashboardStudent;