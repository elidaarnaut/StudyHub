import React, { useRef } from 'react';
import SliderItem from "./SliderItem";
import rightArrow from "../assets/angle-right (2).svg";
import leftArrow from "../assets/angle-left.svg";

function Slider(){

    
        const sliderRef = useRef(null);
    
        const scrollLeft = () => {
            // Scrolls the slider to the left
            sliderRef.current.scrollLeft -= sliderRef.current.offsetWidth;
        };
    
        const scrollRight = () => {
            // Scrolls the slider to the right
            sliderRef.current.scrollLeft += sliderRef.current.offsetWidth;
        };

    return(
        <div className="sliderContainer">
            <div className="arrow leftArrow" onClick={scrollLeft}>
                <img src={leftArrow} alt="" />
            </div>
            <div className="slider" ref={sliderRef}>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>
                <SliderItem></SliderItem>

            </div>
            <div className="arrow rightArrow"  onClick={scrollRight}>
                <img src={rightArrow} alt="" />
            </div>
        </div>
    );
}

export default Slider;