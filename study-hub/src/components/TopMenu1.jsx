import React from "react";
import Search1 from "./Search1";
import Container from 'react-bootstrap/Container';

import "../App.css"

function TopMenu1(){
    return(
        <div className="topMenu1div">
            <Search1></Search1>
            <div>
                <button className="button">Log in</button>
                <button className="button">Sign up</button>
            </div>
            
        </div>
    );
}

export default TopMenu1;