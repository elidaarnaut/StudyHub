import React from "react";
import TopMenu2 from "../components/TopMenu2";
import InstructorCard from "../components/InstructorCard";
import person1 from "../assets/person1.jpg";
import person2 from "../assets/person2.jpg";
import person3 from "../assets/person3.jpg";
import person4 from "../assets/person4.jpg";
import person5 from "../assets/person5.jpg";

function InstructorsPage() {
    const instructors = [
        { 
            name: "Emily Cartwright",
            email: "emily.cartwright@edututors.com",
            bio: "Emily holds a Master’s degree in Mathematics from the University of Cambridge. She has extensive experience as a high school math teacher and has been involved in curriculum development for advanced placement courses. Emily also regularly participates in math workshops and symposiums as a guest speaker.",
            image: person5 // Corrected - directly use the import variable
        },
        { 
            name: "Sarah Mendez",
            email: "sarah.mendez@learnhub.org",
            bio: "Sarah graduated with a Master of Science in Chemistry from Stanford University. She has worked as a research assistant in organic chemistry labs and has taught undergraduate chemistry courses for three years. Her passion for educational outreach has led her to develop several online courses focused on innovative teaching methods in science.",
            image: person2
        },
        {
            name: "James O’Connor",
            email: "james.oconnor@scholarscape.com",
            bio: "James earned a Master’s degree in English Literature from Harvard University. Following his graduation, he taught English at a community college and later at a university level. His expertise lies in American literature and critical theory. James has also contributed to literary journals and online education platforms.",
            image: person4
        },
        {
            name: "Michael Sun",
            email: "michael.sun@tutorconnect.com",
            bio: "Michael holds a PhD in Physics from MIT. He has worked as a research scientist in particle physics and as a professor teaching both graduate and undergraduate students. Michael’s teaching methods are highly praised for incorporating practical applications and fostering a deep understanding of complex concepts.",
            image: person1
        },
        {
            name: "Liam Robertson",
            email: "liam.robertson@academyplus.net",
            bio: "Liam completed his Master’s in History at UCLA, specializing in European history. He has over five years of experience teaching high school and college students, focusing on making history accessible and engaging. Liam has developed several educational programs and workshops for enhancing historical literacy among students.",
            image: person3
        }
    ];

    return (
        <div>
            <TopMenu2 />
            <div className="sDashboardMain">
                <div className="next2SideMenuDiv">
                    <div className="instructorsSectionDash">
                        <h1 className="instructorsTitle">Instructors page</h1>
                        <hr className="dashHr" />
                        <div className="instructorCardLayout">
                            {instructors.map((instructor, index) => (
                                <InstructorCard key={index} {...instructor} />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default InstructorsPage;
