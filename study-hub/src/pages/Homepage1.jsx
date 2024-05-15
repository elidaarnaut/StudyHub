import React from "react";
import TopMenu1 from "../components/TopMenu1";

function Homepage1() {
    return(
        <div className="hp1Body">
            <TopMenu1></TopMenu1>
            <div className="mainPartHP">
                <div className="mainText">
                    <h1>Welcome to StudyHub</h1>
                    <p>Welcome to our e-learning platform, where traditional education meets modern technology. 
We offer personalized profiles, AI-driven grading, and interactive labs, making learning efficient and engaging. </p>
                    <br />
                    <p>Join us as we revolutionize education together.</p>
                    <button className="button">Sign up now</button>

                </div>
                <div className="mainPhoto">

                </div>

            </div>
        </div>
    );
}

export default Homepage1;