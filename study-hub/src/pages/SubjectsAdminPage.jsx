import React from "react";
import TopMenu3 from "../components/TopMenu3";
import Slider from "../components/Slider";

function SubjectsAdminPage(){
    const stemSubjects = ["Math", "Biology", "Physics", "Chemistry"];
    const artsSubjects = ["Music", "Art", "Graphic Design"];
    const socialSciencesSubjects = ["Geography", "History", "Psychology", "Sociology"];

    return(
        <div>
            <TopMenu3></TopMenu3>
            <div className="sDashboardMain">
                <div className="next2SideMenuDiv">
                    <div className="stemSection">
                        <h1 className="instructorsTitle">STEM </h1>
                        <hr />
                        <Slider items={stemSubjects} />
                    </div>
                    <div className="artsSection">
                        <h1 className="instructorsTitle">ART</h1>
                        <hr />
                        <Slider items={artsSubjects} />
                    </div>
                    <div className="socialSciences">
                        <h1 className="instructorsTitle">SOCIAL SCIENCES</h1>
                        <hr />
                        <Slider items={socialSciencesSubjects} />
                    </div>

                </div>
            </div>
           

        </div>
    );
}

export default SubjectsAdminPage;