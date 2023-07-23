import React, { useEffect } from 'react'
import "./findus.css"
import { images } from '../constants'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Findus() {
    useEffect(() => {
        AOS.init();
      }, []);

  return (
    <div className='findus-cont app__bg'>
        <div className='findus1' data-aos="fade-up" data-aos-duration="700">
            <span>Contact</span>
            <img src={images.spoon} alt="" />
            <h1>Find Us</h1>
            <h4>Lane Ends Bungalow,
                 Whatcroft Hall Lane, Rudheath, CW9 7SG</h4>
            <h2>Opening Hours</h2>
            <p>Mon - Fri: 10:00 am - 02:00 am</p>
            <h3>Sat - Sun: 10:00 am - 03:00 am</h3>
            <button>Visit us</button>
        </div>
        <div className='findus2' data-aos="fade-up" data-aos-duration="700">
            <img src={images.findus} alt="" />
        </div>
    </div>
  )
}
