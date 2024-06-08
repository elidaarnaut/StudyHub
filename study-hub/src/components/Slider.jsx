import React, { useState, useEffect } from 'react';
import './Slider.css';

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const numDivs = 10; // Total number of divs

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current) => (current + 1) % numDivs);
        }, 3000); // Rotate divs every 3 seconds
        return () => clearInterval(interval);
    }, []);

    // Helper function to determine which divs to show
    const getDivsToShow = () => {
        return [
            (current % numDivs),
            ((current + 1) % numDivs),
            ((current + 2) % numDivs)
        ];
    };

    const divsToShow = getDivsToShow();

    return (
        <div className="slider">
            {divsToShow.map((index) => (
                <div key={index} className="slide">
                    Div {index + 1}
                </div>
            ))}
        </div>
    );
};

export default Slider;
