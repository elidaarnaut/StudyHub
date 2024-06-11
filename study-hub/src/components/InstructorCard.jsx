import React from "react";
import instructorImg from "../assets/InstructorImg.jpg";
import "../App.css";
import { Link } from "react-router-dom";

function InstructorCard(){
    return(
        <div className="instructorCard">
            <div className="instructorImgContainer">
                <img src={instructorImg} alt="" />
            </div>
            <div className="instructorText">
                <p className="instructorName">John Doe</p>
                <p>credentials description Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nihil eaque quae aperiam doloribus cumque omnis, nostrum, pariatur voluptatibus minima dolor iste cum beatae reiciendis a nemo accusantium soluta tempore ea. Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis similique beatae explicabo ut illo. Iure maxime, sit, consequuntur esse eligendi quod harum tempora ducimus vitae neque eum voluptatum dolore illum!</p>
                <Link to="/instructorProfileStudentDash" className="noLink"><button class="card-button">More info</button></Link>
            </div>
            

        </div>
    );
}

export default InstructorCard;