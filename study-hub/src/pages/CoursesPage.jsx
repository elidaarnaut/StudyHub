import React from "react";
import TopMenu2 from "../components/TopMenu2";
import CourseCard from "../components/CourseCard";

import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";

const courseData = [
    {
        title: "Advanced Calculus for High School",
        description: "An in-depth exploration of calculus designed to prepare high school students for collegiate level mathematics.",
        instructorName: "Emily Cartwright",
        instructorEmail: "emily.cartwright@edututors.com",
        image: person5,
        price: 200
    },
    {
        title: "Organic Chemistry Fundamentals",
        description: "A detailed study of organic chemistry principles, focusing on reactions, analysis, and molecular structures.",
        instructorName: "Sarah Mendez",
        instructorEmail: "sarah.mendez@learnhub.org",
        image: person2,
        price: 250
    },
    {
        title: "Modern American Literature",
        description: "Explore major themes and authors from 20th century American literature, with a focus on narrative techniques and historical context.",
        instructorName: "James O’Connor",
        instructorEmail: "james.oconnor@scholarscape.com",
        image: person4,
        price: 180
    },
    {
        title: "The Physics of Particles",
        description: "An advanced course in particle physics, examining the fundamental forces and particles that constitute the universe.",
        instructorName: "Michael Sun",
        instructorEmail: "michael.sun@tutorconnect.com",
        image: person1,
        price: 300
    },
    {
        title: "European History Overview",
        description: "From the Renaissance to modern times, this course covers key periods and movements in European history.",
        instructorName: "Liam Robertson",
        instructorEmail: "liam.robertson@academyplus.net",
        image: person3,
        price: 220
    }
];

function CoursesPage(){
    return(
        <div>
            <TopMenu2 />
            <div className="sDashboardMain">
                <div className="next2SideMenuDiv">
                    <div className="coursesSection">
                        <h1 className="instructorsTitle">Courses Offered</h1>
                        <hr className="hrDash" />
                        <div className="coursesCardLayout">
                            {courseData.map((course, index) => (
                                <CourseCard key={index} {...course} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CoursesPage;
