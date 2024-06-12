import React from "react";
import TopMenu2 from "../components/TopMenu2";
import banner from "../assets/banner.svg";
import profilePic from "../assets/person5.jpg"; // Assuming this is correct
import CourseCard from "../components/CourseCard";

const courses = [
    {
        title: "Advanced Calculus for High School",
        description: "Explore differential and integral calculus with applications in real-world problems, designed for advanced high school students.",
        instructorName: "Emily Cartwright",
        instructorEmail: "emily.cartwright@edututors.com",
        instructorImg: profilePic,
        price: 40
    },
    {
        title: "AP Mathematics Preparation",
        description: "Get ready for the AP exams with intensive problem-solving sessions and comprehensive material coverage.",
        instructorName: "Emily Cartwright",
        instructorEmail: "emily.cartwright@edututors.com",
        instructorImg: profilePic,
        price: 40
    },
    {
        title: "Interactive Mathematics Workshops",
        description: "Participate in engaging workshops that enhance your understanding of mathematics through practical applications and group activities.",
        instructorName: "Emily Cartwright",
        instructorEmail: "emily.cartwright@edututors.com",
        instructorImg: profilePic,
        price: 40
    }
];

function InstructorProfileStudentDash(){
    return (
        <div>
            <TopMenu2 />
            <div className="next2SideMenuDivProfile">
                <img src={banner} alt="Banner" className="banner" />
                <div className="ProfilePicDiv">
                    <img src={profilePic} alt="Emily Cartwright" className="profilePic"/>
                </div>
                <div className="profileContents">
                    <div className="profileSides">
                        <p className="profileName">Emily Cartwright</p>
                        <p className="profileEmail">emily.cartwright@edututors.com</p>
                    </div>
                    <div className="profileSides3 sectionDiv">
                        <p className="profileBio">Bio</p>
                        <div className="profileBioText">
                            Emily holds a Master’s degree in Mathematics from the University of Cambridge. She has extensive experience as a high school math teacher and has been involved in curriculum development for advanced placement courses. Emily also regularly participates in math workshops and symposiums as a guest speaker.
                        </div>
                    </div>
                </div>
                <div className="coursesSection1">
                    <h1 className="instructorsTitle">Emily's Courses</h1>
                    <hr className="hrDash" />
                    <div className="coursesCardLayout">
                        {courses.map((course, index) => (
                            <CourseCard key={index} {...course} />
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstructorProfileStudentDash;
