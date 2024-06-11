import React from "react";
import { Link } from "react-router-dom";
import { useUser } from "../contexts/UserContext"; // Ensure this path is correct

function InstructorCard({ name, email, bio, image }) {
    const user = useUser(); // Use the custom hook to get the user info

    // Determine the link based on the user role
    const linkPath = user && user.role === 'admin' ? "/adminInstructorProfile" : "/instructorProfileStudentDash";

    return (
        <div className="instructorCard">
            <div className="instructorImgContainer">
                <img src={image} alt={`Instructor ${name}`} />
            </div>
            <div className="instructorText">
                <p className="instructorName">{name}</p>
                <p>{email}</p>
                <p>{bio}</p>
                <Link to={linkPath} className="noLink">
                    <button className="card-button">More info</button>
                </Link>
            </div>
        </div>
    );
}

export default InstructorCard;
