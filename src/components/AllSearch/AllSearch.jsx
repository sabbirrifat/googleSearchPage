import React from "react";
import Faq from "../Faq/Faq";
import GlobeIcon from "@material-ui/icons/Public";
import ShareIcon from "@material-ui/icons/Share";
import { SocialIcon } from "react-social-icons";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import {
  data,
  availableStreamsData,
  resultTabShortInfos,
} from "../../Utils/SearchData";

const AllSearch = () => {

    const availableStreamsContent = (link, title, key) => (
        <div className="stream__contents" key={key}>
          <SocialIcon url={link} />
          <p>{title}</p>
        </div>
      );
    
      const resultTabShortInfosContent = (title, description, key) => (
        <p key={key}>
          <strong>{title}:</strong> {description}
        </p>
      );

  return (
    <>
      <div className="searchPage__results">
        <p className="searchPage__resultCount">
          About 11,00000 results (0.10 seconds) for <strong>James</strong>
        </p>

        {data.map((item) => (
          <div className="searchPage__result">
            <a className="searchPage__resultLink" href={item.link}>
              {item.link} ▽
            </a>
            <a className="searchPage__resultTitle" href={item.link}>
              <h2>{item.title}</h2>
            </a>

            <p className="searchPage__resultSnippet">{item.description}</p>
          </div>
        ))}
        <Faq />
      </div>

      <div className="searchPage__resultsTab">
        <div className="main__info">
          <div className="main__infoTitle">
            <h1>James</h1>
            <p>Rock band</p>
          </div>
          <ShareIcon />
          <img
            src="data:image/jpeg;base64,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"
            alt=""
          />
        </div>
        <hr />
        <div className="website__area">
          <GlobeIcon />
          <p>wearejames.com</p>
        </div>
        <hr />

        <div className="available__streams">
          <h3>Available on</h3>
          <hr />
          {availableStreamsData.map((item, key) => {
            return (
              <>
                {availableStreamsContent(item.link, item.title, key)}
                <hr />
              </>
            );
          })}

          <div className="stream__contents">
            <ExpandMoreIcon />
            <p>More music servies</p>
          </div>
        </div>

        <div className="short__description">
          <p>
            James are an English rock band from Manchester, who were formed in
            1982. They enjoyed popularity throughout the 1990s, with four top
            10s on the UK Singles Chart and nine top 10s on the UK Albums Chart.{" "}
            <strong>Wikipedia</strong>
          </p>
        </div>

        <div className="short__infos">
          {resultTabShortInfos.map((item, key) => (
            <>{resultTabShortInfosContent(item.title, item.description, key)}</>
          ))}
        </div>
      </div>
    </>
  );
};

export default AllSearch;
