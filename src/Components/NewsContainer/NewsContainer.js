import React from "react";
import "./NewsContainer.css";
import New from "./New/New";

function NewsContainer(props) {
  return (
    <div className="news-container">
      {props.news.map((value) => {
        return (
          <New
            key={value.id}
            title={value.title}
            description={value.description}
            url={value.url}
            image={value.image}
          />
        );
      })}
    </div>
  );
}

export default NewsContainer;
