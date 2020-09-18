import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Header from "./Components/Header/Header";
import NewsContainer from "./Components/NewsContainer/NewsContainer";

function App() {
  const API_KEY = "2ugPctD7OQTlzB4aPMaA0_5whNxRJtzRlMFrtZ7d3hht3FDd";
  const [searchText, setSearchText] = useState("");
  const [newsArray, setNewsArray] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const searchClicked = async () => {
    if (searchText === "") {
      window.alert("Please enter a search keyword!");
      return;
    }
    setIsLoading(true);
    const fetch = await axios(
      `https://api.currentsapi.services/v1/search?keywords=${searchText}&apiKey=${API_KEY}`
    );
    const data = await fetch.data;
    setNewsArray(data.news);
    setIsLoading(false);
  };

  useEffect(() => {
    let fetchData = async () => {
      const fetch = await axios(
        `https://api.currentsapi.services/v1/latest-news?apiKey=${API_KEY}`
      );
      const data = await fetch.data;
      setNewsArray(data.news);
      setIsLoading(false);
    };

    fetchData();
  }, []);

  return (
    <div className="App">
      <Header
        search={(value) => {
          setSearchText(value);
        }}
        searchClicked={searchClicked}
      />
      {isLoading ? (
        <p className="loading">Loading...</p>
      ) : (
        <NewsContainer searchedText={searchText} news={newsArray} />
      )}
    </div>
  );
}

export default App;
