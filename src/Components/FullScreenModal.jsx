import React, { useState } from 'react';
import options from '../assets/options.svg';
import createNav from '../utils/ReactUtils/createNav';
import { navLinks } from './Header';
import Search from './Search';


const rowWrap = 'flex flex-col';
const linkStyle = "border-b border-gray-200 border-b[0.1rem] cursor-pointer flex justify-start mx-[1rem] py-6 pl-6 font-bold";


function FullScreenModal() {
  const [isOpen, setIsOpen] = useState(false);

  function openModal() {
    setIsOpen(true);
  }
  function closeModal() {
    setIsOpen(false);
  }

  return (
    <>
      <button onClick={openModal} className='p-2 rounded'>
        <img src={options} className='w-8' />
      </button>

      {isOpen && (
        <div className='fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center'>
          <div className='bg-white p-4 rounded shadow-lg w-[100%] h-[100%]'>
            <button onClick={closeModal} className='text-black hover:bg-gray-100 p-1 font-bold'>
              X
            </button>
            <Search modalView={true}/>
            <nav className=' w-[100%] h-[100%] flex flex-col w-[100%]'>
            {createNav(navLinks, linkStyle, rowWrap)}
          </nav>
          </div>
        </div>
      )}
    </>
  );
}

export default FullScreenModal;
