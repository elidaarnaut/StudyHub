import React from "react";
import { useUser } from "../contexts/UserContext";  // Make sure the import path is correct
import { useNavigate } from "react-router-dom";

function CourseCard({ title, description, instructorName, instructorEmail, instructorImg, price }) {
    const { user, loading } = useUser();
    const navigate = useNavigate();

    const handleMoreInfoClick = () => {
        if (loading) {
            console.log("Loading user data...");
            return;
        }

        if (!user) {
            console.log("No user data available.");
            return;
        }

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
                    <img src={instructorImg} alt={instructorName} />
                </div>
                <p className="instructorNameCC">{instructorName}</p>
                <div className="CCPriceBox">
                    <p>Price: ${price}</p>  {/* Display the price */}
                </div>
            </div>
            <div className="CCText">
                <h1 className="courseName">{title}</h1>
                <p className="CCBoldedText">Description:</p>
                <p className="CCInstructorDescription">{description}</p>
                <p className="CCBoldedText">Instructor email:</p>
                <p>{instructorEmail}</p>
                <button className="card-button" onClick={handleMoreInfoClick}>More info</button>
            </div>
        </div>
    );
}

export default CourseCard;
