import React, { useEffect } from 'react'
import images from '../constants/images'
import "./home.css"
import UsableProp from '../components/UsableProp'
import AOS from 'aos';
import 'aos/dist/aos.css';


export default function Home() {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className='home' id='home'>
        <div className='text-div' data-aos="fade-up" data-aos-duration="700">
        <UsableProp 
        title="The Key To Fine Dining"
        description="Sit tellus lobortis sed senectus vivamus molestie.
                    Condimentum volutpat morbi facilisis quam scelerisquesapien.
                    Et, penatibus aliquam amet tellus"
        buttonText="Explore Menu"
        />
        </div>
        <div className='img-div' data-aos="fade-up" data-aos-duration="700">
        <img src={images.welcome} alt="" />
        </div>
    </div>
  )
}
