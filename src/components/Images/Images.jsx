import React from 'react'
import { allImages } from '../../Utils/SearchData'
import './Images.Style.css'
const Images = () => {
    return (
        <div className="search_images">
            <div className="search_images">
                {
                    allImages.map((item, key) => {
                            return (
                                <a key={key} className="singleImg" style={{ textDecoration: 'none' }} href={item.link}>
                                    <div className="search_imageBox">
                                        <div className="img_sec">
                                            <img src={item.img} alt={item.name} />

                                        </div>
                                        <div className="desc_sec">
                                            <div className="image_desc_name">
                                                {item.name}
                                            </div>
                                            <div className="image_desc_website">
                                                {item.site_name}
                                            </div>

                                        </div>

                                    </div>
                                </a>



                            )
                    })
                }
             

            </div>
        </div>
    )
}

export default Images
