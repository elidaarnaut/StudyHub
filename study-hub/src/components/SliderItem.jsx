import React from 'react';
import './Slider.css';  
import subjectCoverMath from "../assets/mathSubject.jpg";

const SliderItem = ({ id, content }) => {
    return (
        <div className="slider-item" id={id}>
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
