import React, { useState } from 'react';
import "../App.css";

function ContactForm() {
    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        subject: '',
        content: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Here, you can add logic to send data to a server or some other processing
    };

    return (
        <form className="contact-form" onSubmit={handleSubmit}>
            <h2>Contact Form</h2>
            <div className="form-group">
                <input type="text" id="name" name="name" placeholder="Name"
                       value={formData.name} onChange={handleChange} required />
                <input type="text" id="surname" name="surname" placeholder="Surname"
                       value={formData.surname} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <input type="text" id="subject" name="subject" placeholder="Subject"
                       value={formData.subject} onChange={handleChange} required />
            </div>
            <div className="form-group">
                <textarea id="content" name="content" placeholder="Content"
                          value={formData.content} onChange={handleChange} required></textarea>
            </div>
            <button type="submit">Send</button>
        </form>
    );
}

export default ContactForm;
