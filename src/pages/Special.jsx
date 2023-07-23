import React, { useEffect } from "react";
import "./special.css";
import images from "../constants/images";
import data from "../constants/data";
import Line from "../assets/Rectangle 14 (1).svg";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Special() {
  const wineData = data.wines;
  const cocktailsData = data.cocktails;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="special-cont" id="menu" >
      <div className="special-title" data-aos="fade-up" data-aos-duration="700">
        <p>Menu that fits your palate</p>
        <img src={images.spoon} alt="spoon" />
        <h1>Today’s Special</h1>
      </div>
      <div className="special-menu" data-aos="fade-up" data-aos-duration="700">
        <div className="special-1">
          <h1 className="wine-and-beer">Wine & Beer</h1>
          {wineData.map((wine, index) => (
            <div className="map-div" key={index}>
              <p className="wines-title">{wine.title}</p>
              <img className="line-img" src={Line} alt="" />
              <span className="wine-price">{wine.price}</span>
              <span className="cocktail-tag">{wine.tags}</span>
            </div>
          ))}
        </div>
        <div className="special-img" data-aos="fade-up" data-aos-duration="700">
          <img src={images.menu} alt="" />
        </div>
        <div>
          <div className="special-1" data-aos="fade-up" data-aos-duration="700">
            <h1 className="wine-and-beer">Cocktails</h1>
            {cocktailsData.map((cocktail, index) => (
              <div className="map-div" key={index}>
                <p className="wines-title">{cocktail.title}</p>
                <img src={Line} alt="" />
                <span className="wine-price">{cocktail.price}</span>
                <span className="cocktail-tag">{cocktail.tags}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className="btn-cont">
      <button className="btn">View More</button>
      </div>
    </div>
  );
}
