//  TOP MENU FOR INSTRUCTOR

import React from "react";
import Search1 from "./Search1";
import Sidebar from "./Sidebar3";
import menuPic from "../assets/menu.svg";

import "../App.css"

function TopMenu4(){

  const [isOpen, setIsOpen] = React.useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };
  return(
    <div className="topMenu2div">
      <Sidebar toggleNav={toggleNav}  />
            
      <p>StudyHub</p>
      <div className="rightItem">
        <Search1></Search1>
      </div>
    </div>
  );
}

export default TopMenu4;