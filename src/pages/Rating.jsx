import React, { useEffect } from 'react';
import "./rating.css";
import images from '../constants/images';
import data from "../constants/data";
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Rating() {
  const awardsData = data.awards;

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='app__bg rating-cont' id='awards'>
      <img data-aos="fade-up" data-aos-duration="700" className='logo-img-spoons' src={images.logo} alt="logo" />
      <div className='rating-grid'>
        <div className='rating-div1' data-aos="fade-up" data-aos-duration="700">
          <span>Awards & recognition</span>
          <img className='spoon-award' src={images.spoon} alt="spoon" />
          <h1>Our Laurels</h1>
          <div className='row'>
            {awardsData.slice(0, 2).map((award, index) => (
              <div key={index} className='mapped-rating'>
                <div>
                  <img className='reward-img' src={award.imgUrl} alt="" />
                </div>
                <div className='reward-details'>
                  <p>{award.title}</p>
                  <span>{award.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
          <div className='row'>
            {awardsData.slice(2, 4).map((award, index) => (
              <div key={index} className='mapped-rating'>
                <div>
                  <img className='reward-img' src={award.imgUrl} alt="" />
                </div>
                <div className='reward-details'>
                  <p>{award.title}</p>
                  <span>{award.subtitle}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className='rating-div2' data-aos="fade-up" data-aos-duration="700">
                <img src={images.laurels} alt="" />
        </div>
      </div>
    </div>
  );
}
