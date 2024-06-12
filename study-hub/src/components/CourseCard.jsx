import React from "react";
import { useNavigate } from "react-router-dom";

function CourseCard({ title, description, instructorName, instructorEmail, image, price }) {
    const navigate = useNavigate();

    const handleMoreInfoClick = () => {
        navigate('/singularCoursePage'); // Modify this URL based on your actual routing needs
    };

    return (
        <div className="courseCard">
            <div className="CCPictureSection">
                <div className="courseInstructorImg">
                    <img src={image} alt={instructorName} onError={(e) => e.target.src = 'defaultImage.jpg'} />
                </div>
                <p className="instructorNameCC">{instructorName}</p>
                <div className="CCPriceBox">
                    <p>Price: ${price}</p>
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
