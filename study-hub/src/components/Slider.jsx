import React, { useState, useEffect } from 'react';
import './Slider.css';
import SliderItem from './SliderItem';

const Slider = ({ items }) => {
    const [current, setCurrent] = useState(0);
    const numItems = items.length;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent(current => (current + 1) % numItems);
        }, 3000); // Change slides every 3 seconds
        return () => clearInterval(interval);
    }, [numItems]);

    const itemsToShow = [
        items[(current % numItems)],
        items[((current + 1) % numItems)],
        items[((current + 2) % numItems)]
    ];

    return (
        <div className="slider">
            {itemsToShow.map((item, index) => (
                <SliderItem key={index} content={item} active={index === 1} />
            ))}
        </div>
    );
};

export default Slider;
