import React, { useState } from 'react';
import TopMenu2 from "../components/TopMenu2";
import SideMenu from "../components/SideMenu";
import SettingsMenu from "../components/SettingsMenu";
import profilePic from "../assets/profilePic.svg";



function SettingsPage2(){
    const [nickname, setNickname] = useState('');  // Initialize nickname state

    // Function to clear the input field
    const clearInput = () => {
        setNickname('');  // Clear the nickname state
    };
    return(
        <div>
            <TopMenu2></TopMenu2>
            <SideMenu></SideMenu>
            <div className="next2SideMenuSettings">
                <br />
                <div className="settingsContents">
                    <div className="accSettings">
                        <p className="functionHeading">Change Profile Photo</p>
                        <div className="changeProfilePicDiv">
                            <img src={profilePic} alt="Profile Picture" />
                            <div className="changeProfilePicText">
                                <p>Update your profile photo to personalize your account. Choose a photo that represents you best!</p>
                                <button className="button">Upload Photo</button>
                            </div>
                        </div>
                        <br />
                        <hr />
                        
                        <p className="functionHeading">Change Nickname</p>
                        <p className="settingsText">Your nickname is how you appear on StudyHub to other learners and instructors.</p>
                        <form>
                            <label htmlFor="nickname">Nickname:</label>
                            <div className="input-container">
                                <input 
                                    type="text" 
                                    id="nickname" 
                                    name="nickname" 
                                    placeholder="Jane.doe" 
                                    value={nickname} 
                                    onChange={e => setNickname(e.target.value)} 
                                />
                                <button type="button" className="clear-button" onClick={clearInput}>X</button>
                            </div>
                        </form>
                        <br />
                        <hr />
                        <p className="functionHeading">Change Banner Cover</p>
                        <p className="settingsText">Make your profile stand out by updating your banner cover.</p>
                        <button className="button">Upload Photo</button>
                        <br />
                        <hr />
                        <button className="button">Save Changes</button>

                    </div>
                </div>
                <hr className="hrSetting"/>
                <SettingsMenu></SettingsMenu>

            </div>
        </div>
    );

}

export default SettingsPage2;