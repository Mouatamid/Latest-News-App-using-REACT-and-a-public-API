import React from 'react';
import './SearchButton.css';

function SearchButton(props){

    const buttonClick = () => {
        props.searchClicked();
    }

    return(
        <input type="submit" name="search-button" className="search-button" value="Search" onClick={buttonClick} />
    )
}

export default SearchButton;