import React, { useEffect } from "react";
import { images } from "../constants";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import "./slider.css";
import InstagramIcon from "@mui/icons-material/Instagram";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function ImageSlider() {
  useEffect(() => {
    AOS.init();
  }, []);

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2.5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  // Add a function to handle the image container hover events
  const handleImageHover = (index, showIcon) => {
    const imageContainer = document.querySelector(
      `.slider-library .slick-slide:nth-child(${index + 1}) .image-container`
    );
    const igIcon = document.querySelector(
      `.slider-library .slick-slide:nth-child(${index + 1}) .ig-icon`
    );

    if (showIcon) {
      igIcon.style.opacity = 1;
      // You can add additional animations or styles here if desired
    } else {
      igIcon.style.opacity = 0;
    }
  };

  return (
    <div className="slider-cont">
      <div className="slider-div1" data-aos="fade-up" data-aos-duration="700">
        <span>Instagram</span>-
        <img src={images.spoon} alt="" />
        <h1>Photo Gallery</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Volutpat
          mattis ipsum turpis elit elit scelerisque egestas mu.
        </p>
        <button>View More</button>
      </div>
      <div className="slider-div2" data-aos="fade-up" data-aos-duration="700">
        <Slider className="slider-library" {...sliderSettings}>
          <div
            className="image-container"
            onMouseEnter={() => handleImageHover(0, true)}
            onMouseLeave={() => handleImageHover(0, false)}
          >
            <img src={images.gallery01} alt="" />
            <InstagramIcon className="ig-icon" />
          </div>
          <div
            className="image-container"
            onMouseEnter={() => handleImageHover(0, true)}
            onMouseLeave={() => handleImageHover(0, false)}
          >
            <img src={images.gallery02} alt="" />
            <InstagramIcon className="ig-icon" />
          </div>
          <div
            className="image-container"
            onMouseEnter={() => handleImageHover(0, true)}
            onMouseLeave={() => handleImageHover(0, false)}
          >
            <img src={images.gallery03} alt="" />
            <InstagramIcon className="ig-icon" />
          </div>
          <div
            className="image-container"
            onMouseEnter={() => handleImageHover(0, true)}
            onMouseLeave={() => handleImageHover(0, false)}
          >
            <img src={images.gallery04} alt="" />
            <InstagramIcon className="ig-icon" />
          </div>
        </Slider>
      </div>
    </div>
  );
}
