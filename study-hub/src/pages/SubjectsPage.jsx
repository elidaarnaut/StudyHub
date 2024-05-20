import React from "react";
import TopMenu2 from "../components/TopMenu2";
import SideMenu from "../components/SideMenu";
import Slider from "../components/Slider";

function SubjectsPage(){
    return(
        <div>
            <TopMenu2></TopMenu2>
            <SideMenu></SideMenu>
            <div className="next2SideMenuDiv">
                <div className="stemSection">
                    <h1>STEM </h1>
                    <hr />
                    <Slider></Slider>
                </div>
                <div className="artsSection">
                    <h1>ART</h1>
                    <hr />
                </div>
                <div className="socialSciences">
                    <h1>SOCIAL SCIENCES</h1>
                    <hr />
                </div>

            </div>

        </div>
    );
}

export default SubjectsPage;