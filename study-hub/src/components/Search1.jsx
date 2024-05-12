import React from "react";
import { Form, FormControl } from 'react-bootstrap';
import searchImg from "../assets/search.svg"

function Search1(){
    return(
        <Form>
            <div>
                
                <FormControl
                    type="text"
                    placeholder="Search"
                    className="searchInput"
                    aria-label="Search"
                    // ^^ for people with disabilities
                />
                <button>
                    {/* slika */}
                    <img src={searchImg}></img>
                </button>
                
                    
            </div>
        </Form>
    );
}

export default Search1;