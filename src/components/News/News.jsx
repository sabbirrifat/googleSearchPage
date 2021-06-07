import React, { useState } from 'react'
import { newsSearchData } from '../../Utils/SearchData'
import './News.Style.css'
const News = () => {
    return (
        <div className="searchPage__results">
            <div className="newsItems">
                <p className="searchPage__resultCount">
                    About 868,000 results (0.41 seconds)
                </p>

                {
                    newsSearchData.map((news, key) => (
                        <a className="newsBoxLink" href={`http://${news.link}`}>
                            <div className="newssearchbox">
                                <div className="searchDesc">
                                    <div className="uptab">
                                        <img className="searchwebsiteLogo" src={news.Website_logo} />
                                        <p className="searchnewswebsitelink">
                                            {news.website_link}

                                        </p>

                                    </div>
                                    <div className="newtitle">
                                        {news.title}
                                    </div>
                                    <p className="newsdescription">
                                        {news.description}
                                    </p>

                                    <p className="newsTime">{news.time}</p>

                                </div>

                                <div className="searchImage">
                                    <img src={news.img} alt="search_image" />
                                </div>
                            </div>


                        </a>
                    ))
                }




            </div>
        </div>
    )
}

export default News
