import React from "react";
import instructorImg from "../assets/InstructorImg.jpg";
import "../App.css";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext"; // Ensure this path is correct

function InstructorCard(){
    const user = useUser(); // Use the custom hook to get the user info

    // Determine the link based on the user role
    const linkPath = user && user.role === 'admin' ? "/adminInstructorProfile" : "/instructorProfileStudentDash";

    return(
        <div className="instructorCard">
            <div className="instructorImgContainer">
                <img src={instructorImg} alt="Instructor" />
            </div>
            <div className="instructorText">
                <p className="instructorName">John Doe</p>
                <p>credentials description Lorem ipsum dolor sit amet consectetur, adipisicing elit...</p>
                <Link to={linkPath} className="noLink"><button className="card-button">More info</button></Link>
            </div>
        </div>
    );
}

export default InstructorCard;
