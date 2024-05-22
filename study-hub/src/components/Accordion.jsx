import React, { useState } from 'react';

const Accordion = ({ title, children }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="accordion-item">
            <button className="accordion-toggle" onClick={() => setIsOpen(!isOpen)}>
                {title}
                <span>{isOpen ? '-' : '+'}</span>
            </button>
            {isOpen && <div className="accordion-content">{children}</div>}
        </div>
    );
};

export default Accordion;
