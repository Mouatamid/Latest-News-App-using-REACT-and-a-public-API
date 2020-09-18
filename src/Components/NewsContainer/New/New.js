import React from "react";
import "./New.css";
import Description from "./Description/Description";
import Image from "./Image/Image";
import Time from "./Time/Time";
import Title from "./Title/Title";

function New(props) {
  return (
    <a className="new" href={props.url} target="_blank">
      <Title title={props.title} />
      <Image src={props.image} />
      <Description text={props.description} />
      <Time time={new Date().toLocaleDateString()} />
    </a>
  );
}

export default New;
