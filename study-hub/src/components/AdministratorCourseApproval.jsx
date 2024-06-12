import React from 'react';
import { useNavigate } from 'react-router-dom';

function AdministratorCourseApproval({ courseName }) {
    const navigate = useNavigate();

    const navigateToCoursePage = () => {
        // Navigate to the approval page when the course div is clicked
        if (courseName === "Introduction to Physics") {
            navigate('/approvalCoursePage');
        }
    };

    return (
        <div className="courseReq" onClick={navigateToCoursePage}>
            <p>Course Request Approval</p>
            <p>|</p>
            <p>{courseName}</p>
        </div>
    );
}

export default AdministratorCourseApproval;
