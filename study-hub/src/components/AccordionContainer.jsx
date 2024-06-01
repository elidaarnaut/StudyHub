import React, { useState } from 'react';
import Accordion from './Accordion'; // Adjust the import path as necessary

const AccordionContainer = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = index => {
        const newIndex = openIndex === index ? null : index;
        setOpenIndex(newIndex);
    };

    return (
        <div>
            <Accordion title="Section 1" isOpen={openIndex === 0} onToggle={() => handleToggle(0)}>
                <p>This is the content for section 1.</p>
            </Accordion>
            <Accordion title="Section 2" isOpen={openIndex === 1} onToggle={() => handleToggle(1)}>
                <p>This is the content for section 2.</p>
            </Accordion>
            <Accordion title="Section 3" isOpen={openIndex === 2} onToggle={() => handleToggle(2)}>
                <p>This is the content for section 3.</p>
            </Accordion>
        </div>
    );
};

export default AccordionContainer;
