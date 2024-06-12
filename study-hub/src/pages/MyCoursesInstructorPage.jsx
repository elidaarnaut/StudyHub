import React from "react";
import TopMenu4 from "../components/TopMenu4";
import CourseCard from "../components/CourseCard";
import person5 from "../assets/person5.jpg"; // Update the import path as necessary

const courses = [
    {
        title: "Advanced Calculus for High School",
        description: "Explore differential and integral calculus with applications in real-world problems, designed for advanced high school students.",
        instructorName: "Emily Cartwright",
        instructorEmail: "emily.cartwright@edututors.com",
        instructorImg: person5,
        price: 40,
    },
    {
        title: "AP Mathematics Preparation",
        description: "Get ready for the AP exams with intensive problem-solving sessions and comprehensive material coverage.",
        instructorName: "Emily Cartwright",
        instructorEmail: "emily.cartwright@edututors.com",
        instructorImg: person5,
        price: 40
    },
    {
        title: "Interactive Mathematics Workshops",
        description: "Participate in engaging workshops that enhance your understanding of mathematics through practical applications and group activities.",
        instructorName: "Emily Cartwright",
        instructorEmail: "emily.cartwright@edututors.com",
        instructorImg: person5,
        price: 40
    }
];

function MyCoursesInstructorPage(){
    return(
        <div>
            <TopMenu4></TopMenu4>
            <div className="sDashboardMain">
                <div className="next2SideMenuDiv">
                    <div className="coursesSection">
                        <h1 className="instructorsTitle">My Courses</h1>
                        <hr className="hrDash" />
                        <div className="coursesCardLayout">
                            {courses.map((course, index) => (
                                <CourseCard key={index} {...course} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default MyCoursesInstructorPage;
