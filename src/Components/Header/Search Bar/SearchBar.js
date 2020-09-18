import React from 'react';
import './SearchBar.css';


function SearchBar(props){

    const searchChange = (e) => {
        props.setSearch(e.target.value);
    }
    
    return(
        <input type="search" className="search-bar" name="search-bar" onChange={searchChange} />
    )
}

export default SearchBar;