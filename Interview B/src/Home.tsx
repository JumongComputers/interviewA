// import React from 'react';
import {useState} from 'react';
import {useEffect} from 'react';
import { Link } from 'react-router-dom';
import './Home.css';



const Home = () => {

  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [intervalValue, setIntervalValue] = useState(3000); // Renamed to intervalValue to avoid conflict with setInterval function
  const images = ['caro1.png.png', 'caro2.png', 'caro3.png', 'caro2.png'];
  const accordItems = ['mount2.png', '4th-real.png' ];
  // const [isOpen, setIsOpen] = useState(false);
  const [accordionIndex, setAccordionIndex] = useState(0)


  // const toggleAccordion = () => {
  //   setIsOpen(!isOpen);
  // }

 const handleAccordionClick = (index:number) => {
  setAccordionIndex(index);
  //  toggleAccordion();
 }
  
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, intervalValue);

    return () => {
      clearInterval(timer);
    };
  }, [images.length, intervalValue]);

  const handleThumbnailClick = (index:number) => {
    setCurrentImageIndex(index);
    setIntervalValue(0);
  };
 
 
 
 
  // const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // const goToNextImage = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const goToPreviousImage = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  // };


  // const goToNextImage = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
  // };

  // const goToPreviousImage = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  // };


  
  
  
  
  // if (window.innerWidth <= 894) {
  //   baitStyle['@media only screen and (max-width: 894px)'] = {
  //     backgroundSize: "contain",
  //   };
  // }
  
  return (
    <div>
    <div className='bait' >
      <div className="navbar">
        <div>
          <img src={'logo.png'} alt="Navigation Logo" />
        </div>
        <div className="nava">
          <span><Link to={'/history'}>01. HISTORY</Link></span>
          <span><Link to={'/team'}>02. TEAM</Link></span>
        </div>
      </div>
    </div>
  
  
  
        <div className='maj '>
            <div className='navbar'>
            <img src="./logo 2.png" alt="logo" />
            <div className="navac">
            <Link to={'/history'}>01. HISTORY</Link>
            <Link to={'/team'}>02. TEAM</Link>
            </div>
            </div>
            
        </div>
        <div className='sec'>
          <img src="./second_real_banner.png" alt="second banner" />
          <div className="mainCarosse">

            <div className='carosse'>


            {images.map((image, index) => (
              <div key={index} className={index === currentImageIndex ? 'active' : ''}>
                <img src={image} alt={`caro${index + 1}`} />
              </div>
            ))}


            
              
            </div>

            <div className='corr1'>
                {images.map((_, index:number) => (
              <div key={index} className={index === currentImageIndex ? 'active' : ''} onClick={() => handleThumbnailClick(index)}>
                
              </div>
            ))}
              </div>
            
          </div>
      
        </div>
        
        <div className='mint'>
              <img src="./ban.png" alt="ban" />
        </div>

           
        
        <div className='maint'>

          <div className='maint1'>
            <div className=" maint1a">
            <div className='accord' onClick={() => handleAccordionClick(0)}>MOUNTAIN 1</div>
            <div className='accord' onClick={() => handleAccordionClick(1)}>MOUTAIN 2</div>
            </div>
           
          </div>
           
        </div>
        <div className='accordy'>
              {accordItems.map((item, index) => (
                <div key={index} className={`accord1 ${accordionIndex === index ? 'open' : ''}`}>
                  { accordionIndex === index && <img src={item} alt={`accord${index + 1}`} />}
                </div>
              )
              )}
        </div>
        
        <div className='navak'>
            <div className='navbar1 '>
              <div className="ima">
              <img src="./logo3.png" alt="logo" />
              </div>
            
            <div className="navb">
            <Link to={'/history'}>COPYRIGHT 2016 ALL RIGHTS RESERVED</Link>
            
            </div>
            </div>
            
        </div>
      </div>
   
  );
};

export default Home;
