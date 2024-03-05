// components/Sidebar.js
import React from 'react';

const Sidebar = ({ isOpen, toggle }) => {
  return (
    <div className={`fixed top-0 left-0 w-64 h-full bg-white text-black ${isOpen ? 'block' : 'hidden'} `}>
    <button className='mx-auto px-4 pt-2' onClick={toggle}>
        <img src="icon-close.svg" />
    </button>
      <ul className="mt-8">
        <li className="px-4 py-2 hover:bg-gray-700">Collections</li>
        <li className="px-4 py-2 hover:bg-gray-700">Men</li>
        <li className="px-4 py-2 hover:bg-gray-700">Women</li>
        <li className="px-4 py-2 hover:bg-gray-700">About</li>
        <li className="px-4 py-2 hover:bg-gray-700">Contact</li>
      </ul>
    </div>
  );
};

export default Sidebar;
