import React from "react";
import TopMenu2 from "../components/TopMenu2";
import SideMenu from "../components/SideMenu";
import SettingsMenu from "../components/SettingsMenu";


function SettingsPage1(){
    return(
        <div>
            <TopMenu2></TopMenu2>
            <SideMenu></SideMenu>
            <div className="next2SideMenuSettings">
                <br />
                <div className="settingsContents">
                    <p>hi</p>
                </div>
                <SettingsMenu></SettingsMenu>
                
            </div>
        </div>
    );
}

export default SettingsPage1;