import React from "react";
import mathSubject from "../assets/mathSubject.jpg";

function MySubjectsDash(){
    return (
        <div className="subjectItemDash">
            <div className="subjectCover">
                {/* slika ovdje */}
                <img src={mathSubject} alt="" />
            </div>
            <br />
            <div className="subjectTextCard">
                <p className="subjectTitle">Subject 1</p>
                <p>Desctiption</p>
                <p>Subject Category</p>
            </div>
            
         </div>
    );
}

export default MySubjectsDash;