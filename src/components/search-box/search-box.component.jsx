import React from "react";

import "./search-box.styles.css"

/*  This is a functional component that can't access the constructor,
    the lifecycle methods or the state;
    This component can get some props, and return an HTML, it's easier to read
    easier to test and smaller;
*/

export const SearchBox = ({ placeholder, handleChange }) => (
    <input
        className="search"
        type="search" 
        placeholder={placeholder} 
        onChange={handleChange} 
    />
);