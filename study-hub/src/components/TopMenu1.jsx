import React from "react";
import Search1 from "./Search1";
import { Link } from "react-router-dom";

import "../App.css"

function TopMenu1(){
    return(
        <div className="topMenu1div">
            {/* <Search1></Search1> */}
            <div >
                <Link to="/dashboardInstructor"><button className="button">Log in</button></Link>
                <Link to="/dashboardAdministrator"><button className="button">Sign up</button></Link>
            </div>
            
        </div>
    );
}

export default TopMenu1;