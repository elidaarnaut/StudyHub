import React, { useState, useEffect } from 'react';
import './Slider.css';
import SliderItem from './SliderItem'; // Ensure the correct path is used

const Slider = () => {
    const [current, setCurrent] = useState(0);
    const numItems = 10; // Total number of items in the slider

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((current) => (current + 1) % numItems);
        }, 3000); // Change slides every 3 seconds
        return () => clearInterval(interval);
    }, []);

    // Helper function to determine which items to show
    const getItemsToShow = () => {
        return [
            (current % numItems),
            ((current + 1) % numItems),
            ((current + 2) % numItems)
        ];
    };

    const itemsToShow = getItemsToShow();

    return (
        <div className="slider">
            {itemsToShow.map((index) => (
                <SliderItem key={index} id={`item-${index + 1}`} /> // Assuming SliderItem accepts an 'id' or similar prop
            ))}
        </div>
    );
};

export default Slider;
