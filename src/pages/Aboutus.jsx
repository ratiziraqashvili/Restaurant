import React, { useEffect } from "react";
import images from "../constants/images";

import "./aboutus.css";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Aboutus() {
    useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="about-us app__bg" id="about">
      <div className="div-1" data-aos="fade-up" data-aos-duration="700" >
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button>Know More</button>
      </div>
      <div className="image-container" data-aos="fade-up" data-aos-duration="700">
        <img src={images.G} alt="" className="g-image" />
        <img src={images.knife} alt="" className="knife-image" />
      </div>
      <div className="div-3" data-aos="fade-up" data-aos-duration="700">
        <h1>Our History</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quis pharetra
          adipiscing ultrices vulputate posuere tristique. In sed odio nec
          aliquet eu proin mauris et.
        </p>
        <button>Know More</button>
      </div>
    </div>
  );
}
