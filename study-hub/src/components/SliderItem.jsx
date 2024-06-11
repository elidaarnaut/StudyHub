import React from 'react';
import './Slider.css';  

const SliderItem = ({ content, active }) => {
    const itemClass = active ? "slider-item active" : "slider-item";
    return (
        <div className={itemClass}>
            <div className="slider-item-content">
                <p>{content}</p>
            </div>
        </div>
    );
};

export default SliderItem;
