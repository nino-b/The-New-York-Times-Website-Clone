import React from 'react';
import { Link } from 'react-router-dom';
import createNav from "../utils/ReactUtils/createNav";
import Search from './Search';

const languages = {
  us: 'U.S.',
  international: 'INTERNATIONAL',
  ca: 'CANADA',
  es: 'ESPAÑOL',
  cn: '中文'
}
const langLinkStyles = "text-black-600 hover:cursor-pointer active:text-black mx-[.3rem] hover:border-b-2 hover:border-black";
const rowWrap = 'flex flex-wrap';




export default function HeaderTop() {

  return (
    <div className='flex flex-wrap justify-between items-baseline'>
      <Search modalView={false}/>
      {/* List of regions / website languages. Mock */}
      <nav className='text-[.65rem]'>
        {createNav(languages, langLinkStyles, rowWrap)}
      </nav>
    
      <div>
        <Link to={"/"} className="hover:bg-[#326891] bg-[#567b95] text-white rounded-[0.3rem] px-5 py-2.5  text-[.7rem] font-bold mr-3">SUBSCRIBE FOR $1/WEEK</Link>
        <Link to={'/'} className="hover:bg-[#326891] bg-[#567b95] text-white rounded-[0.3rem] px-5 py-2.5  text-[.7rem] font-bold">LOG IN</Link>
      </div>
    </div>
  );
}
