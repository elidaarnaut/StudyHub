import React from "react";
import Search1 from "./Search1";
import user from "../assets/user.svg";

import "../App.css"

function TopMenu2(){
    return(
        <div className="topMenu2div">
            <div className="leftItem">
              <Search1 />
            </div>
            <div className="centerItem">
              <p>StudyHub</p>
            </div>
            <div className="rightItem">
              <div className="userIcon">
                <img src={user} alt="User Icon" />
              </div>
            </div>
        </div>
    );
}

export default TopMenu2;