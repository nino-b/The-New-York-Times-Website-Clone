import React from 'react';
import searchLogo from '../assets/search.svg';
import { useState } from "react";

export default function Search({modalView}) {

  const [isVisible, setIsVisible] = useState(false);
  const [hasText, setHasText] = useState(false);
  const [searchinput, setSearchinput] = useState('');

  function handleSubmit(event) {
    event.preventDefault();
    setSearchinput('');
    setHasText(false);
  }
  function handleInputChange(event) {
    const val = event.target.value
    setSearchinput(val);
    setHasText(val.length > 0);
  }

  return (
    <div className='flex'>
      {!modalView && (
        <button
          onClick={() => {
          setIsVisible(!isVisible)
          }} 
          className='h-[1rem] w-[1rem] flex flex-wrap mr-4 self-center'
          data-testid='display-search-box'
         >
          <img src={searchLogo} alt="Search" />
        </button>
      )}
     <form 
       className={`flex row-nowrap text-[.65rem] ${modalView ? 'w-full' : ''}`}
       style={{visibility: isVisible || modalView ? 'visible' : 'hidden'}}
       onSubmit={handleSubmit}
       data-testid='search-form'
       >
       <input 
         type="text" 
         name="searchInput" 
         placeholder="SEARCH" 
         className={`rounded-[.2rem] border border-black p-1 ${modalView ? 'w-full' : ''}`} 
         value={searchinput} // Controlled input
         onChange={handleInputChange}
         data-testid='search-input' />
       <button 
         type="submit" 
         className='ml-[.5rem] hover:bg-[#326891] bg-[#567b95] h-full px-[.2rem] rounded-[0.2rem] text-white' 
         disabled={!hasText} 
         data-testid='search-btn'
         >GO</button>
      </form>
   </div>
  );
}