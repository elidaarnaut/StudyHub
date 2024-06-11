import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Slider.css';  
import subjectCoverMath from "../assets/mathSubject.jpg";

const SliderItem = ({ content }) => {
    const navigate = useNavigate();

    const handleClick = () => {
        if (content === "Biology") {
            navigate('/gradepage');  // Adjust the path as needed
        }
    };

    return (
        <div className="slider-item" onClick={handleClick}>
            <div className="slider-item-content">
                <div className='subjectPic'>
                    <img src={subjectCoverMath} alt={content} />
                </div>
                <p>{content}</p>
            </div>
        </div>
    );
};

export default SliderItem;
