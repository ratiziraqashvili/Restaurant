import React from 'react';
import './App.css';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Subscribe from './components/Subscribe';
import Aboutus from './pages/Aboutus';
import Chef from './pages/Chef';
import Findus from './pages/Findus';
import Home from './pages/Home';
import Rating from './pages/Rating';
import Slider from './pages/Slider';
import Special from './pages/Special';
import Video from './pages/Video';

const App = () => (
  <div className='App'>
    <Navbar />
    <Home />
    <Aboutus />
    <Special />
    <Chef />
    <Video />
    <Rating />
    <Slider />
    <Findus />
    <Subscribe />
    <Footer />
  </div>
);

export default App;
