import React from "react";
import TopMenu2 from "../components/TopMenu2";
import SideMenu from "../components/SideMenu";
import SettingsMenu from "../components/SettingsMenu";

function SettingsPage3(){
    return(
        <div>
            <TopMenu2></TopMenu2>
            <SideMenu></SideMenu>
            <div className="next2SideMenuSettings">
                <br />
                <div className="settingsContents">
                    <div className="accSettings">
                        <p className="functionHeading">Password Change</p>
                        <p className="settingsText">Change your password to keep your account secure. You’ll need to enter your old password, then create a new one.</p>
                        {/* TO DO: This button adds padding bottom from somewhere, need to fix it. */}
                        <button className="button settingsButton">Change Password</button>
                        <br />
                        <hr />
                        <p className="majorHeading">DANGER ZONE</p>
                        <p className="settingsText">The Danger Zone contains important actions that can significantly affect your account, like deleting it. Proceed with caution.</p>
                    
                        <p className="functionHeading">Delete Account</p>
                        <p className="settingsText">Permanently delete your account to remove all your data from Study Hub. This action cannot be undone, so please confirm your decision carefully.</p>
                        <button className="button settingsButton">Delete Account</button>
                    </div>
                </div>
                <hr className="hrSetting"/>
                <SettingsMenu></SettingsMenu>

            </div>

        </div>
    );
}

export default SettingsPage3;