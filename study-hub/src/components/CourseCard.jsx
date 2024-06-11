import React from "react";
import { useUser } from "../contexts/UserContext";  // Make sure the import path is correct
import { useNavigate } from "react-router-dom";
import instructorImg from "../assets/InstructorImg.jpg";

function CourseCard() {
    const { user, loading } = useUser();  // Get user info from context
    const navigate = useNavigate();  // Updated to use useNavigate

    const handleMoreInfoClick = () => {
        if (loading) {
            console.log("Loading user data...");
            return;
        }

        if (!user) {
            console.log("No user data available.");
            return;
        }

        // Redirect based on user role
        switch (user.role) {
            case 'admin':
                navigate('/singularCoursePageAdmin');
                break;
            case 'instructor':
                navigate('/singularCoursePageInstructor');
                break;
            case 'student':
            default:
                navigate('/singularCoursePage');
                break;
        }
    };

    return (
        <div className="courseCard">
            <div className="CCPictureSection">
                <div className="courseInstructorImg">
                    <img src={instructorImg} alt="Instructor" />
                </div>
                <p className="instructorNameCC">John Doe</p>
                <div className="CCPriceBox">
                    <p>Price: $$$</p>
                </div>
            </div>

            <div className="CCText">
                <h1 className="courseName">Course Name</h1>
                <p className="CCBoldedText">Description:</p>
                <p className="CCInstructorDescription">Course description Lorem ipsum dolor sit amet consectetur adipisicing elit. </p>
                <p className="CCBoldedText">Instructor email:</p>
                <p>john.doe@gmail.com</p>
                <p className="CCBoldedText">Instructor Description:</p>
                <p className="CCInstructorDescription">Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis quia adipisci ex quaerat voluptates minima facere mollitia molestiae fugiat esse? Maxime eaque pariatur, dolorum ab error aperiam distinctio odit corporis.</p>
                <button className="card-button" onClick={handleMoreInfoClick}>More info</button>
            </div>
        </div>
    );
}

export default CourseCard;
