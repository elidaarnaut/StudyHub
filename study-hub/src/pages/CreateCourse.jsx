import React, { useState } from 'react';
import TopMenu4 from '../components/TopMenu4';
import '../App.css';  // Assuming your CSS file is named app.css and is in the same directory level

function CreateCourse() {
    const [formData, setFormData] = useState({
        courseName: '',
        courseDescription: '',
        coursePrice: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
        // Additional submission logic here, such as an API call
    };

    return (
        <div className='courseCreateMain'>
            <TopMenu4></TopMenu4>
            <div className='next2SideMenuDiv'>
            <div className="create-course-container">
            <form onSubmit={handleSubmit} className="create-course-form">
                <label htmlFor="courseName" className="form-label">Course Name</label>
                <input
                    type="text"
                    id="courseName"
                    name="courseName"
                    value={formData.courseName}
                    onChange={handleChange}
                    className="form-input"
                />

                <label htmlFor="courseDescription" className="form-label">Course Description</label>
                <textarea
                    id="courseDescription"
                    name="courseDescription"
                    value={formData.courseDescription}
                    onChange={handleChange}
                    className="form-textarea"
                />

                <label htmlFor="coursePrice" className="form-label">Course Price</label>
                <input
                    type="text"
                    id="coursePrice"
                    name="coursePrice"
                    value={formData.coursePrice}
                    onChange={handleChange}
                    className="form-input"
                />

                <button type="submit" className="submit-button">Create Course</button>
            </form>
        </div>
            </div>
        </div>
        
    );
}

export default CreateCourse;
