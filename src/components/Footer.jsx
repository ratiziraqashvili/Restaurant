import React from 'react'
import "./footer.css"
import { images } from '../constants'
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <>
    <div className='footer-grid app__bg' id='contact'>
        <div className='footer1'>
        <h2>Contact Us</h2>
        <span>9 W 53rd St, New York, NY 10019, USA</span>
        <p>+1 212-344-1230</p>
        <p>+1 212-555-1230</p>
        </div>
        <div className='footer2'>
            <h1>Gerícht</h1>
            <span>"The best way to find yourself is to lose yourself in the service of others.”</span>
            <img src={images.spoon} alt="" />
            <div>
            <FacebookIcon />
            <TwitterIcon />
            <InstagramIcon />
            </div>
        </div>
        <div className='footer3'>
            <h2>Working Hours</h2>
            <p>Monday-Friday:</p>
            <p>08:00 am -12:00 am</p>
            <p>Saturday-Sunday:</p>
            <p>07:00am -11:00 pm</p>
        </div>
    </div>
    <div className='last-footer app__bg'>
        <p>2021 Gerícht. All Rights reserved.</p>
    </div>
    </>
  )
}
