import React from 'react';
import { useState, useEffect } from 'react';
import createNav from "../utils/ReactUtils/createNav";
import mainLogo from '../assets/main-logo.svg';
import human from '../assets/human.svg';
import getCurrentDate from "../utils/JSUtils/getCurrentDate";
import HeaderTop from './HeaderTop';
import { Link } from 'react-router-dom';
import FullScreenModal from './FullScreenModal';

const pageLinkAndName = {
  us: 'U.S.',
  politics: 'Politics',
  nyregion: 'New York',
  'california-today': 'California',
  education: 'Education',
  health: 'Health',
  science: 'Science',
  climate: 'Climate',
  weather: 'Weather',
  sports: 'Sports',
  business: 'Business',
  tech: 'Tech',
  upshot: 'The Upshot',
  magazine: 'The Magazine'
};

export const navLinks = {
  us: 'U.S.',
  world: 'World',
  business: 'Business',
  arts: 'Arts',
  lifestyle: 'Lifestyle',
  opinion: 'Opinion',
  audio: 'Audio',
  games: 'Games',
  cooking: 'Cooking',
  wirecutter: 'Wirecutter',
  athleticL: 'The Athletic'
}
export const linkStyle = "hover:border-b border-black border-b[0.1rem] cursor-pointer flex justify-center mx-[1rem]";

const rowWrap = 'flex flex-wrap';


export default function Header() {
  const [isBelow1024, setIsBelow1024] = useState(window.matchMedia('(max-width: 1024px)').matches);
  useEffect(() => {
    const handleResize = (event) => {
      setIsBelow1024(event.matches);
    };

    const mediaQuery = window.matchMedia('(max-width: 1024px)');
    mediaQuery.addEventListener('change', handleResize);

    // Cleanup listener on unmount
    return () => mediaQuery.removeEventListener('change', handleResize);
  }, []);
  return (
    <div >
      {isBelow1024 ? (
        <section className='flex flex-col flex-wrap'>
        <div className='flex flex-wrap my-2 items-center'>
          <FullScreenModal />
        
        
          <div className='flex-grow flex justify-center'>
             <Link to={"/"} className='flex-shrink-0'>
                <img src={mainLogo} className='max-w-[200px] h-auto' alt='Main Logo'/>
              </Link>
          </div>
              <Link to={"/"} className='flex-shrink-0'>
                <img src={human} className='w-[2.2rem] h-auto' alt='Human'/>
              </Link>
        </div>
        
        
        <hr className='border-black mb-[.13rem]'/>
        <div className='flex flex-wrap my-2 justify-between items-center'>
          <span className='text-[.7rem] font-bold mx-auto'>
            {getCurrentDate()}
          </span>
          <Link to={'/'} className='ml-[-6rem] text-[#326891] text-[.6rem]'>
            SUBSCRIBE FOR $1/WEEK
          </Link>
        </div>
        <hr className='border-black'/>
        </section>
      ) : (
        <section className='flex flex-col flex-wrap'>
        <HeaderTop />
  
        <div className='flex flex-wrap justify-between my-2'>
            <div className='flex flex-col text-[.9rem]'>
              <span>{getCurrentDate()}</span>
              <span>Today's Paper</span>
            </div>
            <Link to={"/"} className='transform sm:scale-60 lg:scale-150'>
              <img src={mainLogo} className='w-[100%] mr-[2rem]'/>
            </Link>
            {/* Placeholder for stocks display */}
            <div className='w-16'></div>
          </div>
    
          <nav className='flex flex-wrap justify-center'>
            {createNav(navLinks, linkStyle, rowWrap)}
          </nav>
          <hr className='border-black mb-[.13rem]'/>
          <hr className='border-black'/>
        </section>
       )}
    </div>
  );
}
