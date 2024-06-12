import React from "react";

function AdminInstructorRequest({ instructorName }) {
    return (
        <div className="instructorReq">
            <p>Instructor Request Approval</p>
            <p>|</p>
            <p>{instructorName}</p>
        </div>
    );
}

export default AdminInstructorRequest;
