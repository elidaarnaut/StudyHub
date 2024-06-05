import React from "react";
import { Form, FormControl } from 'react-bootstrap';
import searchImg from "../assets/search.svg"

function Search1(){
    return(
        <Form>
            <div className="searchBar1">
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="searchInput"
                    id="searchInput"
                    aria-label="Search"
                    // ^^ for people with disabilities
                />
                <button className="searchButton">
                    {/* slika */}
                    <img src={searchImg} className="searchImg"></img>
                </button>
                
                    
            </div>
        </Form>
    );
}

export default Search1;