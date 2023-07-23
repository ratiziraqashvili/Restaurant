import React, { useEffect } from "react";
import "./chef.css";
import images from "../constants/images";
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Chef() {
    useEffect(() => {
        AOS.init();
      }, []);  

  return (
    <div className="app__bg">
        <div className="chef-cont" >

        <div className="chef-div1"  data-aos="fade-up" data-aos-duration="700" >
            <img src={images.chef} alt="" />
        </div> 
        <div className="chef-div2"  data-aos="fade-up" data-aos-duration="700">
        <span>Chef’s Word</span>
        <img src={images.spoon} alt="" />
        <h1>What We Believe In</h1>
        <img src={images.quote} alt="" />
        <p>Lorem ipsum dolor sit amet,
             consectetur adipiscing elit auctor sit .</p>
        <p>auctor sit iaculis in arcu. Vulputate nulla lobortis mauris eget sit.
             Nulla scelerisque scelerisque congue ac consequat, aliquam molestie lectus eu.
             Congue iaculis integer curabitur semper sit nunc.</p>
             <h2>Kevin Luo</h2>
             <span>Chef & Founder</span>
             <h1>Kevin Luo</h1>
        </div>

       </div>
    </div>
  )
}

