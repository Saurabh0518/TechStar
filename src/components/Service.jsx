import React from 'react'
import {Carousel} from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img3 from "../assests/img3.jpg";
import img4 from "../assests/img4.jpg";

const Service = () => {
  return (
    <div className = "services">
        <Carousel
        infiniteLoop autoPlay showStatus={false} showArrows={false} interval={1000} showThumbs="false"
        >
            <div>
                <img src={img3} alt="Item1"/>
                <p className='legend'>Full Stack</p>
            </div>
            <div>
                <img src={img4} alt="Item2"/>
                <p className='legend'>Peer-to-Peer Support</p>
            </div>
        </Carousel>
    </div>
  );
}

export default Service;