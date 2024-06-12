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
            <Accordion title="What is StudyHub?" isOpen={openIndex === 0} onToggle={() => handleToggle(0)}>
                <p>StudyHub is an advanced e-learning platform designed to bridge the gap between traditional education methods and modern technological advancements. It offers a dynamic, user-friendly, and accessible learning environment for students and instructors.</p>
            </Accordion>
            <Accordion title="Can I access StudyHub courses on my mobile device?" isOpen={openIndex === 1} onToggle={() => handleToggle(1)}>
                <p>Yes, StudyHub is designed to be fully responsive and accessible on various devices including desktops, tablets, and smartphones, ensuring a seamless learning experience on any device.</p>
            </Accordion>
            <Accordion title="What special features does StudyHub offer?" isOpen={openIndex === 2} onToggle={() => handleToggle(2)}>
                <p>StudyHub integrates cutting-edge AI technology to enhance learning and teaching experiences. Features include AI-driven language learning, virtual labs, and automated grading and feedback systems.</p>
            </Accordion>
        </div>
    );
};

export default AccordionContainer;
