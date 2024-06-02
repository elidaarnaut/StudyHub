import React from "react";
import { Link } from "react-router-dom";
import TopMenu1 from "../components/TopMenu1";
import hpGirl from "../assets/hpGirl.svg";

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
                    <p className="mainPInvite">Join us as we revolutionize education together.</p>
                    
                    {/* CHANGE LATER */}
                    <Link to="/selectProfile">
                        <button className="button">Sign up now</button>
                    </Link>

                </div>
                <div className="mainPhoto">
                    <img src={hpGirl} alt="Girl Studying Illustration" />
                </div>

            </div>
        </div>
    );
}

export default Homepage1;