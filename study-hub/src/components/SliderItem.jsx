import React from 'react';
import './Slider.css';  // Ensure you have corresponding CSS for styling
import subjectCoverMath from "../assets/mathSubject.jpg";

const SliderItem = ({ id, content }) => {
    return (
        <div className={`slider-item`} id={id}>
            <div className="slider-item-content">
                <div className='subjectPic'>
                    <img src={subjectCoverMath} alt="" />
                </div>
                <p>Subject number {id}</p>
            </div>
        </div>
    );
};

export default SliderItem;