import React from "react";
import SearchBar from "./Search Bar/SearchBar";
import SearchButton from "./SearchButton/SearchButton";
import "./Header.css";

function Header(props) {

  const setSearch = (value) => {
    props.search(value);
  }
  const searchClicked = () => {
    props.searchClicked();
  }

  return (
    <div className="header">
      <h1>
        Latest<span>News</span>
      </h1>
      <div>
        <SearchBar setSearch={setSearch} />
        <SearchButton searchClicked={searchClicked}  />
      </div>
    </div>
  );
}

export default Header;
