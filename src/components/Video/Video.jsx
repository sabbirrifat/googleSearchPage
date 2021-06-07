import React from "react";
import { videoSearchData } from "../../Utils/SearchData";
import "./Video.css";

const Video = () => {
  return (
    <div className="searchPage__results">
      <p className="searchPage__resultCount">
        About 11,00000 results (0.10 seconds) for <strong>James</strong>
      </p>

      {videoSearchData.map((item) => (
        <div className="searchPage__result">
          <a className="searchPage__resultLink" href={item.link}>
            {item.link} {">"} watch ▽
          </a>
          <a className="searchPage__resultTitle" href={item.link}>
            <h2>{item.title}</h2>
          </a>

          <div className="searchDescription">
            <img src={item.img} alt="" />
            <div className="video__description">
              <p className="searchPage__resultSnippet">{item.description}</p>
              <p className="newsTime">{item.time}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Video;
