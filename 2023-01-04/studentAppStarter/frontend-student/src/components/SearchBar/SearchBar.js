import React from 'react';
import './SearchBar.css'

function SearchBar({searchTerm, setSearchTerm}) {

    const handleChange = (e) => {
        setSearchTerm(e.target.value)
        // console.log(e.target.value)
    } 
    return (
        <input className="StudentList__search" 
        placeholder='Search by Name' 
        type="text" 
        value={searchTerm}
        onChange={handleChange}
        />

    );
}

export default SearchBar;