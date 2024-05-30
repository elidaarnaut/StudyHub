import React from "react";
import Search1 from "./Search1";
import menuPic from "../assets/menu.svg";

import "../App.css"

function TopMenu2(){
    return(
        <div className="topMenu2div">
            <div className="leftItem">
              <div>
                <img src={menuPic} alt="" className="menuPic" />
              </div>
            </div>
            <div className="centerItem">
              <p>StudyHub</p>
            </div>
            <div className="rightItem">
              <Search1></Search1>
            </div>
        </div>
    );
}

export default TopMenu2;