import React from "react";
import { Link } from "react-router-dom";
import "../App.css";


function SettingsMenu(){
    return(
        <div className="settingsMenu">
            <div className="sMenuContent">
                <Link to="/settings1" className="link"><p>Account</p></Link>
                <hr />
                <Link to="/settings2" className="link"><p>Profile</p></Link>
                <hr />
                <Link to="/settings3" className="link"><p>Support and Help</p></Link>
            </div>
        </div>
    );
}

export default SettingsMenu;