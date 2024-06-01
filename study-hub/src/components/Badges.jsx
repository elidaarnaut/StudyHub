import React from "react";
import newcomerBadge from "../assets/newcomerBadge.svg";

function Badges(){
    return(
        <div className="badgeDiv">
            <img src={newcomerBadge} alt="Newcomer Badge" />
            <div className="badgeText">
                <p>Newcomer</p>
                <p>Welcome to StudyHub</p>
            </div>
            
        </div>
    );
}

export default Badges;