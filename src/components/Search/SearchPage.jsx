import React, { useState } from "react";
import "./Search.styles.css";
import SearchIcon from "@material-ui/icons/Search";
import MicIcon from "@material-ui/icons/Mic";
import { Button } from "@material-ui/core";
import DescriptionIcon from "@material-ui/icons/Description";
import ImageIcon from "@material-ui/icons/Image";
import VideoIcon from "@material-ui/icons/VideoLibrary"
import LocalOfferIcon from "@material-ui/icons/LocalOffer";
import RoomIcon from "@material-ui/icons/Room";
import MoreVertIcon from "@material-ui/icons/MoreVert";
import AllSearch from "../AllSearch/AllSearch";
import Video from "../Video/Video";
import News from "../News/News";
import Images from "../Images/Images";


const SearchTest = () => {
  const [input, setInput] = useState("James");
  const [searchTab, setSearchTab] = useState('search');

  

  return (
    <div className="searchPage">
      <div className="searchPage__header">
        <a href="/">
          <img
            className="searchPage__logo"
            src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_272x92dp.png"
            alt=""
          />
        </a>

        <div className="searchPage__headerBody">
          <form className="search">
            <div className="search__input">
              <SearchIcon className="search__inputIcon" />
              <input value={input} onChange={(e) => setInput(e.target.value)} />
              <MicIcon />
            </div>

            <div className="search__buttons">
              <Button
                className="search__buttonsHidden"
                type="submit"
                variant="outlined"
              >
                Google Search
              </Button>
              <Button className="search__buttonsHidden" variant="outlined">
                I'm Feeling Lucky
              </Button>
            </div>
          </form>

          <div className="searchPage__options">
            <div className="searchPage__optionsLeft">
              <div className="searchPage__option">
                <SearchIcon />
                <a onClick={() => setSearchTab('search')} >All</a>
              </div>
              <div className="searchPage__option">
                <VideoIcon />
                <a onClick={() => setSearchTab('video')}>Videos</a>
              </div>
              <div className="searchPage__option">
                <ImageIcon />
                <a  onClick={() => setSearchTab('images')}>Images</a>
              </div>
              <div className="searchPage__option">
                <DescriptionIcon />
                <a  onClick={() => setSearchTab('news')}>News</a>
              </div>
              <div className="searchPage__option">
                <RoomIcon />
                <a onClick={() => setSearchTab('maps')}>maps</a>
              </div>
              <div className="searchPage__option">
                <MoreVertIcon />
                <a >more</a>
              </div>
            </div>

            <div className="searchPage__optionsRight">
              <div className="searchPage__option">
                <a href="/settings">Settings</a>
              </div>
              <div className="searchPage__option">
                <a href="/tools">Tools</a>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="searchPage__resutlsContainer">
        {
          console.log("Search Status: ", searchTab)
        }
      {
        searchTab === 'search' ? 
        <AllSearch /> : searchTab === 'video' ? <Video /> : 
        searchTab=== 'news' ? <News/> : 
        searchTab==="images" ? <Images/> : null
      }


      </div>
    </div>
  );
};

export default SearchTest;
