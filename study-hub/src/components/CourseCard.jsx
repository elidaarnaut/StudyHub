import React from "react";
import instructorImg from "../assets/InstructorImg.jpg";

function CourseCard(){
    return(
        <div className="courseCard">
            <div className="CCPictureSection">
                <div className="courseInstructorImg">
                    {/* img goes here */}
                    <img src={instructorImg} alt="" />
                </div>
                {/* Instructor name here */}
                <p className="instructorNameCC">John Doe</p>
                <div className="CCPriceBox">
                    <p>Price: $$$</p>
                </div>
            </div>

            <div className="CCText">
                {/* course info in here */}
                <h1 className="courseName">Course Name</h1>
                <p className="CCBoldedText">Description:</p>
                <p className="CCInstructorDescription">Course description Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p className="CCBoldedText">Instructor email: </p>
                <p>john.doe@gmail.com</p>
                <p className="CCBoldedText">Instructor Description:</p>
                <p className="CCInstructorDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia adipisci ex quaerat voluptates minima facere mollitia molestiae fugiat esse? Maxime eaque pariatur, dolorum ab error aperiam distinctio odit corporis.</p>
                <button class="card-button">More info</button>

            </div>

        </div>
    );
}

export default CourseCard;