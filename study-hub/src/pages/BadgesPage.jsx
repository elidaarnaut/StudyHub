import React from "react";
import TopMenu2 from "../components/TopMenu2";
import Badges from "../components/Badges";


function BadgesPage() {
    return(
        <div>
            <TopMenu2></TopMenu2>
            <div className="sDashboardMain">
                <div className="next2SideMenuDiv">
                    <div className="coursesSection">
                        <h1 className="instructorsTitle">My Badges</h1>
                        <hr className="hrDash" />
                        <div className="badgesLayout">
                            <Badges></Badges>
                            <Badges></Badges>
                            <Badges></Badges>
                            <Badges></Badges>
                            <Badges></Badges>
                            <Badges></Badges>
                            <Badges></Badges>
                            <Badges></Badges>
                        </div>
                        <h1 className="instructorsTitle">Locked Badges</h1>
                        <hr className="hrDash" />
                        <div className="badgesLayout">
                            <Badges></Badges>
                            <Badges></Badges>
                            <Badges></Badges>
                            <Badges></Badges>
                            <Badges></Badges>
                            <Badges></Badges>
                            <Badges></Badges>
                            <Badges></Badges>
                        </div>

                    </div>

                </div>

            </div>
        </div>
    );
}

export default BadgesPage;